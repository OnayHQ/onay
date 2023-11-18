mod abi;
mod pb;

use pb::events::SpendersByAddress;
use pb::sinkfiles::Lines;
use pb::events::Transfer;
use pb::events::Events;
use pb::events::Approval;

use substreams::Hex;
use substreams_ethereum::pb::eth::v2 as eth;
use substreams_ethereum::Event;

use substreams_entity_change::pb::entity::EntityChanges;

use abi::erc20::events::Transfer as ERC20TransferEvent;
use abi::erc20::events::Approval as ERC20ApproveEvent;

substreams_ethereum::init!();

/// Extracts transfers & approvals events from the contract(s)
#[substreams::handlers::map]
fn map_events(blk: eth::Block) -> Result<Events, substreams::errors::Error> {
    Ok(Events {
        transfers: get_transfers(&blk).collect(),
        approvals: get_approvals(&blk).collect(),
    })
}

#[substreams::handlers::map]
pub fn graph_out(events: Events) -> Result<EntityChanges, substreams::errors::Error> {
    // hash map of name to a table
    let mut tables = substreams_entity_change::tables::Tables::new();

    for transfer in events.transfers.into_iter() {
      if (msg.sender == transfer.from) {
        continue;
      }

      let mut id = transfer.trx_hash.to_owned();
      let log_index: String = transfer.log_index.to_string().to_owned();
      id.push_str(&log_index);

      tables
        .create_row("Transfer", id)
        .set("trxHash", transfer.trx_hash)
        .set("logIndex", transfer.log_index)
        .set("from", transfer.from)
        .set("to", transfer.to)
        .set("quantity", transfer.quantity)
        .set("token", transfer.token);

      //get allowance by userAddress+token+spender

      let mut spenderId = transfer.from.to_owned();

      let token_address: String = transfer.token.to_owned();
      spenderId.push_str(&token_address);

      let spender_address: String = msg.sender.to_owned();
      spenderId.push_str(&spender_address);
      
      tables.create_row("Spender", spenderId)
        .set("allowance", currentAllowance - transfer.quantity)
        .set("spender", msg.sender);
    }

    for approval in events.approvals.into_iter() {
      let mut id = approval.trx_hash.to_owned();
      let log_index: String = approval.log_index.to_string().to_owned();
      id.push_str(&log_index);

      tables
        .create_row("Approval", id)
        .set("trxHash", approval.trx_hash)
        .set("logIndex", approval.log_index)
        .set("spender", approval.spender)
        .set("owner", approval.owner)
        .set("quantity", approval.quantity)
        .set("token", approval.token);

      tables
        .create_row("SpendersByAddress", approval.owner)
        .set("spenders", approval.spender);

      
    }

    Ok(tables.to_entity_changes())
}

/// Extracts transfers events from the contract(s)
#[substreams::handlers::map]
fn jsonl_out(blk: eth::Block) -> Result<Lines, substreams::errors::Error> {
    Ok(Lines {
        lines: get_transfers(&blk)
            .map(|trx| serde_json::to_string(&trx).unwrap())
            .collect(),
    })
}

/// Extracts transfers events from the contract(s)
#[substreams::handlers::map]
fn csv_out(blk: eth::Block) -> Result<Lines, substreams::errors::Error> {
    Ok(Lines {
        lines: get_transfers(&blk).map(|trx| trx.to_csv()).collect(),
    })
}

fn get_transfers<'a>(blk: &'a eth::Block) -> impl Iterator<Item = Transfer> + 'a {
    blk.receipts().flat_map(|receipt| {
        let hash = &receipt.transaction.hash;

        receipt.receipt.logs.iter().flat_map(|log| {
          if let Some(event) = ERC20TransferEvent::match_and_decode(log) {
            let address = &log.address;
            return vec![new_erc20_transfer(hash, log.block_index, event, Hex(address).to_string())];
          }
          vec![]
        })
    })
}

fn get_approvals<'a>(blk: &'a eth::Block) -> impl Iterator<Item = Approval> + 'a {
  blk.receipts().flat_map(|receipt| {
      let hash = &receipt.transaction.hash;

      receipt.receipt.logs.iter().flat_map(|log| {
        if let Some(event) = ERC20ApproveEvent::match_and_decode(log) {
          let address = &log.address;
          return vec![new_erc20_approve(hash, log.block_index, event, Hex(address).to_string())];
        }

        vec![]
      })
  })
}

fn new_erc20_transfer(hash: &[u8], log_index: u32, event: ERC20TransferEvent, token_address: String) -> Transfer {
    Transfer {
        from: Hex(&event.from).to_string(),
        to: Hex(&event.to).to_string(),
        token: token_address,
        quantity: event.value.to_string(),
        trx_hash: Hex(hash).to_string(),
        log_index: log_index as u64,
    }
}

fn new_erc20_approve(hash: &[u8], log_index: u32, event: ERC20ApproveEvent, token_address: String) -> Approval {
  Approval {
      spender: Hex(&event.spender).to_string(),
      token: token_address,
      owner: Hex(&event.owner).to_string(),
      quantity: event.value.to_string(),
      trx_hash: Hex(hash).to_string(),
      log_index: log_index as u64,
  }

  
  SpendersByAddress {

  }
}
