// SPDX-License-Identifier: MIT
pragma solidity =0.8.23;

import {Enum} from "./helpers/Enum.sol";
import {ISafe} from "./interfaces/ISafe.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract OnayModule is Ownable {
    string public constant NAME = "Onay Module";
    string public constant VERSION = "0.1.0";

    constructor() Ownable(msg.sender) {}
    
    function revokeAllowance(
        ISafe safe,
        address token,
        address approvedContract
    ) external onlyOwner {
        bytes memory data = abi.encodeWithSignature("approve(address,uint256)", approvedContract, 0);
        require(safe.execTransactionFromModule(token, 0, data, Enum.Operation.Call), "Could not execute token revoke");
    }
}
