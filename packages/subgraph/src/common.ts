import { Address, BigInt, ethereum, log } from "@graphprotocol/graph-ts"
import { Token, SpendersByAddress, Account, SpendersByToken, AllowancesBySpenders } from "../generated/schema"
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
  spenders.spenders = [];
  spenders.save();
  return spenders as SpendersByAddress;
}

export function getOrCreateAccount(address: Address): Account {
  let addressHex = address.toHexString();
  let account = Account.load(addressHex);
  if (account != null) {
    return account as Account;
  }

  account = new Account(addressHex);
  account.tokens = [];
  account.save();
  return account as Account;
}

export function getOrCreateSpendersByToken(id: string, token: string): SpendersByToken {
  let spenders = SpendersByToken.load(id);
  if (spenders != null) {
    return spenders as SpendersByToken;
  }

  spenders = new SpendersByToken(id);
  spenders.token = token;
  spenders.spenders = [];
  spenders.save();
  return spenders as SpendersByToken;
}

export function getOrCreateAllowancesBySpenders(id: string, spender: Address): AllowancesBySpenders {
  let allowance = AllowancesBySpenders.load(id);
  if (allowance != null) {
    return allowance as AllowancesBySpenders;
  }

  allowance = new AllowancesBySpenders(id);
  allowance.spender = spender;
  allowance.allowance = BigInt.fromI32(0);
  allowance.save();
  return allowance as AllowancesBySpenders;
}

export function findSpendersByToken(spendersByTokenArr: string[], token: Address): SpendersByToken | null {
  for (let i = 0; i < spendersByTokenArr.length; i++) {
    let spendersByToken = SpendersByToken.load(spendersByTokenArr[i]);
    if (!spendersByToken) {
      continue;
    }

    if (spendersByToken.token == token.toHexString()) {
      return spendersByToken;
    }
  }

  return null;
}