// SPDX-License-Identifier: MIT
pragma solidity ~0.8.26;

contract SimpleUpgrade {
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

    function upgrade(address newImplementation) external {
        require(msg.sender == admin, "Only Admin");
        implementation = newImplementation;
    }
}

contract LogicOld {
    address public implementation;
    address public admin;
    string public words;

    function foo() public {
        words = "old";
    }
}

contract LogicNew {
    address public implementation;
    address public admin;
    string public words;

    function foo() public {
        words = "new";
    }
}
