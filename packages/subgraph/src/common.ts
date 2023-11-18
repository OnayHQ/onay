import { Address, BigInt, ethereum, log } from "@graphprotocol/graph-ts"
import { Token, Account, Allowance, Spender } from "../generated/schema"
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
  
  let tryDecimals = tokenInstance.try_decimals()

  // If decimals call is reverted it's not an ERC20 token
  if (tryDecimals.reverted) {
    return null
  }

  token.decimals = tryDecimals.value

  token.save()
  return token as Token
}

export function getOrCreateAccount(address: Address): Account {
  let addressHex = address.toHexString();
  let account = Account.load(addressHex);
  if (account != null) {
    return account as Account;
  }

  account = new Account(addressHex);
  account.save();
  return account as Account;
}

export function getOrCreateSpender(spender: Address, user: Address): Spender {
  let id = spender.concat(user).toHexString();
  let spenderObj = Spender.load(id);
  if (spenderObj != null) {
    return spenderObj as Spender;
  }

  spenderObj = new Spender(id);
  spenderObj.account = user.toHexString();
  spenderObj.spender = spender;
  spenderObj.save();
  return spenderObj as Spender;
}

export function getOrCreateAllowance(user: Address, token: Address, spender: Address): Allowance {
  let id: string = user.concat(token).concat(spender).toHexString();
  let allowance = Allowance.load(id);
  if (allowance != null) {
    return allowance as Allowance;
  }

  allowance = new Allowance(id);
  allowance.account = user.toHexString();
  allowance.spender = spender;
  allowance.token = token;
  allowance.allowance = BigInt.fromI32(0);
  allowance.save();
  return allowance as Allowance;
}
