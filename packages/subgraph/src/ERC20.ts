import { BigInt } from "@graphprotocol/graph-ts"
import { IgnoredToken, SpendersByAddress } from "../generated/schema"
import { Transfer, Approval } from "../generated/ERC20/ERC20"

import {
  getOrCreateERC20Token,
  getOrCreateSpenderByAddress
} from "./common"

export function handleApproval(event: Approval): void {
  // Check if the token address is on the ignore list
  let ignored = IgnoredToken.load(event.address.toHexString());
  if (ignored != null) {
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
    
    return
  }

  let accountSpenders = getOrCreateSpenderByAddress(event.address);
  let spenders: string[] = [];
  if (!accountSpenders.spenders) {
    accountSpenders.spenders = spenders;
  }
  
  let isSpenderIncluded: Boolean = false;
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

  //address+token+spender update with allowance call
}

export function handleTransfer(event: Transfer): void {
  // Ignore 0 amount transfers
  if (event.params.value == BigInt.fromI32(0)) {
    return
  }

  // Check if the token address is on the ignore list
  let ignored = IgnoredToken.load(event.address.toHexString())
  if (ignored != null) {
    return
  }

  // Get or create the token entity
  let token = getOrCreateERC20Token(event, event.address)

  // If null, wasn't an ERC20 token address
  if (!token) {
    // Add address to ignore list
    let ignored = new IgnoredToken(event.address.toHexString())
    ignored.blockNumber = event.block.number
    ignored.timestamp = event.block.timestamp
    ignored.save()
    
    return
  }
}
