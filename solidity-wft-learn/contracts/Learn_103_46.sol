// SPDX-License-Identifier: MIT
pragma solidity ~0.8.26;

import { IERC165 } from "@openzeppelin/contracts/interfaces/IERC165.sol";

import { IERC721 } from "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract Proxy {
    address public implementation;

    constructor(address implementation_){
        implementation = implementation_;
    }

    receive() external payable { }
    fallback() external payable {
        address _implementation = implementation;
        assembly {
            calldatacopy(0, 0, calldatasize())
            
            let result := delegatecall(gas(), _implementation, 0, calldatasize(), 0, 0)

            returndatacopy(0, 0, returndatasize())

            switch result
            case 0 {
                revert(0, returndatasize())
            }
            default {
                return(0, returndatasize())
            }
        }
    }
}

contract Logic{
    address public implementation;
    uint256 public x = 99;
    event callSuccess();

    function increment() external returns(uint256) {
        emit callSuccess();
        return x + 1;
    }
}

contract Caller{
    address public proxy;

    constructor(address proxy_) {
        proxy = proxy_;
    }

    function increase() external returns (uint256) {
        (, bytes memory data) = proxy.call(abi.encodeWithSignature("increment()"));
        return abi.decode(data, (uint256));
    }
}