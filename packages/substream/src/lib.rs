mod abi;
mod pb;

use pb::sinkfiles::Lines;
use pb::transfers::transfer::Schema;
use pb::transfers::Transfer;
use pb::transfers::Transfers;

use pb::approval::Schema;
use pb::approvals::Approval;
use pb::approvals::Approvals;

use substreams::Hex;
use substreams_ethereum::pb::eth::v2 as eth;
use substreams_ethereum::Event;

use abi::erc20::events::Transfer as ERC20TransferEvent;
use abi::erc20::events::Approve as ERC20ApproveEvent;

substreams_ethereum::init!();

/// Extracts transfers events from the contract(s)
#[substreams::handlers::map]
fn map_transfers(blk: eth::Block) -> Result<Transfers, substreams::errors::Error> {
    Ok(Transfers {
        transfers: get_transfers(&blk).collect(),
    })
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
                return vec![new_erc20_transfer(hash, log.block_index, event)];
            }

            if let Some(event) = ERC20ApproveEvent::match_and_decode(log) {
              return vec![new_erc20_approve(hash, log.block_index, event, Hex(&event.log.).to_string())];
          }

            vec![]
        })
    })
}

fn new_erc20_transfer(hash: &[u8], log_index: u32, event: ERC20TransferEvent) -> Transfer {
    Transfer {
        schema: schema_to_string(Schema::Erc20),
        from: Hex(&event.from).to_string(),
        to: Hex(&event.to).to_string(),
        quantity: event.value.to_string(),
        trx_hash: Hex(hash).to_string(),
        log_index: log_index as u64,
    }
}

fn new_erc20_approve(hash: &[u8], log_index: u32, event: ERC20ApproveEvent, tokenAddress: String) -> Approve {
  Approve {
      schema: schema_to_string(Schema::Erc20),
      spender: Hex(&event.spender).to_string(),
      token: tokenAddress,
      to: Hex(&event.to).to_string(),
      quantity: event.value.to_string(),
      trx_hash: Hex(hash).to_string(),
      log_index: log_index as u64,
  }
}

fn schema_to_string(schema: Schema) -> String {
    match schema {
        Schema::Erc20 => "erc20",
    }
    .to_string()
}
