// SPDX-License-Identifier: MIT
pragma solidity ~0.8.26;

contract C {
    uint256 public num;
    address public sender;

    function setVars(uint256 _num) public payable {
        num = _num;
        sender = msg.sender;
    }
}

contract B {
    uint256 public num;
    address public sender;

    event Response(bool success, bytes data);

    function callSetVars(address _addr, uint256 _num) external payable {
        (bool success, bytes memory data) = _addr.call(
            abi.encodeWithSignature("setVars(uint256)", _num)
        );
        emit Response(success, data);
    }

    function delegatecallSetVars(address _addr, uint256 _num) external payable {
        (bool success, bytes memory data) = _addr.delegatecall(
            abi.encodeWithSignature("setVars(uint256)", _num)
        );
        emit Response(success, data);
    }
}
