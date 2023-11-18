import { BigInt, log } from "@graphprotocol/graph-ts"
import { IgnoredToken, SpendersByAddress, SpendersByToken } from "../generated/schema"
import { Transfer, Approval } from "../generated/ERC20/ERC20"

import {
  getOrCreateAccount,
  getOrCreateERC20Token,
  getOrCreateSpenderByAddress,
  findSpendersByToken,
  getOrCreateSpendersByToken,
  getOrCreateAllowancesBySpenders
} from "./common"

export function handleApproval(event: Approval): void {
  // Check if the token address is on the ignore list
  let ignored = IgnoredToken.load(event.address.toHexString());
  if (ignored != null) {
    log.debug("ignored token {}", [event.address.toHexString()]);
    return;
  }

  // Get or create the token entity
  let token = getOrCreateERC20Token(event, event.address);

  // If null, wasn't an ERC20 token address
  if (!token) {
    // Add address to ignore list
    let ignored = new IgnoredToken(event.address.toHexString());
    ignored.blockNumber = event.block.number;
    ignored.timestamp = event.block.timestamp;
    ignored.save();

    log.debug("new ignored token {}", [event.address.toHexString()]);
    
    return
  }

  let accountSpenders = getOrCreateSpenderByAddress(event.address);
  let spenders: string[] = [];
  if (!accountSpenders.spenders) {
    accountSpenders.spenders = spenders;
  }
  
  let isSpenderIncluded: bool;
  for (let i = 0; i < accountSpenders.spenders.length; i++) {
    if (accountSpenders.spenders[i] == event.params.spender.toHexString()) {
      isSpenderIncluded = true
      break;
    }
  }

  if (!isSpenderIncluded) {
    accountSpenders.spenders.push(event.params.spender.toHexString());
    accountSpenders.save();
  }

  let account = getOrCreateAccount(event.address);
  
  let spendersByToken: string[] = [];
  if (!account.tokens){
    account.tokens = spendersByToken;
  }

  let spendersByTokenFound = findSpendersByToken(account.tokens, event.address);
  if (!spendersByTokenFound) {
    let spendersByTokenId: string = event.params.owner.concat(event.address).toString();
    spendersByTokenFound = getOrCreateSpendersByToken(spendersByTokenId, event.address.toHexString());
  }

  let allowancesBySpendersId: string = event.params.owner.concat(event.address).concat(event.params.spender).toString()
  let allowancesBySpenders = getOrCreateAllowancesBySpenders(allowancesBySpendersId, event.params.spender);

  allowancesBySpenders.allowance = event.params.value;
  allowancesBySpenders.save();

  if (!spendersByTokenFound.spenders) {
    let allowances: string[] = [];
    spendersByTokenFound.spenders = allowances;
  }
  spendersByTokenFound.spenders.push(allowancesBySpendersId)
  spendersByTokenFound.save();
}

export function handleTransfer(event: Transfer): void {
  // // Ignore 0 amount transfers
  // if (event.params.value == BigInt.fromI32(0)) {
  //   return
  // }

  // // Check if the token address is on the ignore list
  // let ignored = IgnoredToken.load(event.address.toHexString())
  // if (ignored != null) {
  //   return
  // }

  // // Get or create the token entity
  // let token = getOrCreateERC20Token(event, event.address)

  // // If null, wasn't an ERC20 token address
  // if (!token) {
  //   // Add address to ignore list
  //   let ignored = new IgnoredToken(event.address.toHexString())
  //   ignored.blockNumber = event.block.number
  //   ignored.timestamp = event.block.timestamp
  //   ignored.save()
    
  //   return
  // }
}
