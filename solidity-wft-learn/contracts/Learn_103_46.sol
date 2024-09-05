// SPDX-License-Identifier: MIT
pragma solidity ~0.8.26;

import { IERC165 } from "@openzeppelin/contracts/interfaces/IERC165.sol";

import { IERC721 } from "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract Proxy {
    address public implementation;

    constructor(address implementation_){
        implementation = implementation_;
    }

    fallback() external payable {
        address _implementation = implementation;
        assembly {
            calldatacopy(0, 0, calldatasize())
            
        }
    }
}