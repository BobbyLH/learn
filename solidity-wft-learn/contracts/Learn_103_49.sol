// SPDX-License-Identifier: MIT
pragma solidity ~0.8.26;

contract UUPSProxy {
    address public implementation;
    address public admin;
    string public words;

    constructor(address implementation_) {
        admin = msg.sender;
        implementation = implementation_;
    }

    receive() external payable { }
    fallback() external payable {
        (bool success, bytes memory data) = implementation.delegatecall(msg.data);
    }
}

contract UUPSOld {
    address public implementation;
    address public admin;
    string public words;

    function foo() public {
        words = "old";
    }

    function upgrade(address implementation_) external {
        require(msg.sender == admin, "Must Admin");
        implementation = implementation_;
    }
}

contract UUPSNew {
    address public implementation;
    address public admin;
    string public words;

    function foo() public {
        words = "new";
    }

    function upgrade(address implementation_) external {
        require(msg.sender == admin, "Must Admin");
        implementation = implementation_;
    }
}