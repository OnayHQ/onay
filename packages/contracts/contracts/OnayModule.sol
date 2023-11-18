// SPDX-License-Identifier: MIT
pragma solidity =0.8.23;

import {Enum} from "./helpers/Enum.sol";
import {ISafe} from "./interfaces/ISafe.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

error ExecuteTokenRevokeFailed();
error InvalidParameters();

contract OnayModule is Ownable {
  string public constant NAME = "Onay Module";
  string public constant VERSION = "0.1.1";

  constructor() Ownable(msg.sender) {}
    
  function revokeAllowance(
    ISafe safe,
    address token,
    address approvedContract
  ) external onlyOwner {
    bytes memory data = abi.encodeWithSignature("approve(address,uint256)", approvedContract, 0);
    if (!safe.execTransactionFromModule(token, 0, data, Enum.Operation.Call)) {
      revert ExecuteTokenRevokeFailed();
    }
  }

  function revokeAllowanceBulk(
    ISafe[] calldata safes,
    address[] calldata tokens,
    address[] calldata approvedContracts
  ) external onlyOwner {
    if (safes.length != tokens.length || tokens.length != approvedContracts.length) {
      revert InvalidParameters();
    }

    for (uint i = 0; i < safes.length; i++) {
      bytes memory data = abi.encodeWithSignature("approve(address,uint256)", approvedContracts[i], 0);
      if (!safes[i].execTransactionFromModule(tokens[i], 0, data, Enum.Operation.Call)) {
        revert ExecuteTokenRevokeFailed();
      }
    }
  }
}
