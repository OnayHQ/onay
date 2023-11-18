import { Address, BigInt, ethereum, log } from "@graphprotocol/graph-ts"
import { Token, SpendersByAddress } from "../generated/schema"
import { ERC20 } from "../generated/ERC20/ERC20"

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export function getOrCreateERC20Token(event: ethereum.Event, address: Address): Token | null {
  let addressHex = address.toHexString()
  let token = Token.load(addressHex)
  if (token != null) {
    return token as Token
  }

  token = new Token(addressHex)
  let tokenInstance = ERC20.bind(address)
  let tryName = tokenInstance.try_name()
  if (!tryName.reverted) {
    token.name = tryName.value
  }
  let trySymbol = tokenInstance.try_symbol()
  if (!trySymbol.reverted) {
    token.symbol = trySymbol.value
  }
  
  //log.warning("Getting decimals for token {} {} {} at TX {}", [token.name, token.symbol, addressHex, event.transaction.hash.toHexString()])
  let tryDecimals = tokenInstance.try_decimals()

  // If decimals call is reverted it's not an ERC20 token
  if (tryDecimals.reverted) {
    return null
  }

  token.decimals = tryDecimals.value

  //log.warning("Getting decimals finished successfully for token {} {} {} at TX {}", [token.name, token.symbol, addressHex, event.transaction.hash.toHexString()])
  token.save()
  return token as Token
}

export function getOrCreateSpenderByAddress(address: Address): SpendersByAddress {
  let addressHex = address.toHexString();
  let spenders = SpendersByAddress.load(addressHex);
  if (spenders != null) {
    return spenders as SpendersByAddress;
  }

  spenders = new SpendersByAddress(addressHex);
  spenders.save();
  return spenders as SpendersByAddress;
}
