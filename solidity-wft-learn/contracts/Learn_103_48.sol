// SPDX-License-Identifier: MIT
pragma solidity ~0.8.26;

contract TransparentProxy {
    address implementation;
    address admin;
    string public words;

    constructor(address implementation_) {
        admin = msg.sender;
        implementation = implementation_;
    }

    receive() external payable { }
    fallback() external payable {
        require(msg.sender != admin, "Cannot Be Admin");
        (bool success, bytes memory data) = implementation.delegatecall(msg.data);
    }

    function upgrade(address newImplementation) external {
        if (msg.sender != admin) revert();
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

contract LogicONew {
    address public implementation;
    address public admin;
    string public words;

    function foo() public {
        words = "new";
    }
}