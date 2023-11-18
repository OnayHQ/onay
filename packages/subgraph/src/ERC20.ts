import { BigInt, log, store, Address } from "@graphprotocol/graph-ts"
import { IgnoredToken } from "../generated/schema"
import { Transfer, Approval, ERC20 } from "../generated/ERC20/ERC20"

import {
  getOrCreateAccount,
  getOrCreateERC20Token,
  getOrCreateAllowance,
  getOrCreateSpender
} from "./common"

export function handleApproval(event: Approval): void {
  if (event.transaction.hash.toHexString() == "0x825e495a1f6af52d695230a745b169cb18b26759829883ff694b16395b305dd0") {
    log.info("transaccion_ejecutada", [])
  }
  // Check if the token address is on the ignore list
  let ignored = IgnoredToken.load(event.address.toHexString());
  if (ignored != null) {

    if (event.transaction.hash.toHexString() == "0x825e495a1f6af52d695230a745b169cb18b26759829883ff694b16395b305dd0") {
      log.info("transaccion_return1", [])
    }
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
    
    if (event.transaction.hash.toHexString() == "0x825e495a1f6af52d695230a745b169cb18b26759829883ff694b16395b305dd0") {
      log.info("transaccion_return2", [])
    }
    return
  }

  getOrCreateSpender(event.params.spender, event.params.owner);
  getOrCreateAccount(event.params.owner);

  let allowance = getOrCreateAllowance(event.params.owner, event.address, event.params.spender);
  allowance.allowance = event.params.value;
  allowance.save();

  if (allowance.allowance.equals(BigInt.fromI32(0))) {
    store.remove("Allowance", allowance.id);
  }

  if (event.transaction.hash.toHexString() == "0x825e495a1f6af52d695230a745b169cb18b26759829883ff694b16395b305dd0") {
    log.info("transaccion_terminada", [])
  }
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

  let account = getOrCreateAccount(event.params.from);

  for (let i = 0; i < account.spenders.entries.length; i++) {
    let spender: string = account.spenders.entries[i].value.toString();
    
    let spenderAddress: Address = Address.fromString(spender);
    let allowance = getOrCreateAllowance(event.params.from, event.address, spenderAddress);
    let tokenInstance = ERC20.bind(event.address);
    
    let try_allowance = tokenInstance.try_allowance(event.params.from, spenderAddress);
    if (!try_allowance.reverted) {
      allowance.allowance = try_allowance.value;
      allowance.save(); 

      if (allowance.allowance.equals(BigInt.fromI32(0))) {
        store.remove("Allowance", allowance.id);
      }
    }
  }
}
