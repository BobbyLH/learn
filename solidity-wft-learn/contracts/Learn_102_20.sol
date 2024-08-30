// SPDX-License-Identifier: MIT
pragma solidity ~0.8.26;

contract ReceiveETH {
    event Receive(address sender, uint256 value);

    event FallbackCalled(address Sender, uint Value, bytes Data);

    receive() external payable {
        emit Receive(msg.sender, msg.value);
    }

    fallback() external payable {
        emit FallbackCalled(msg.sender, msg.value, msg.data);
    }

    function getBalance() external view returns (uint) {
        return address(this).balance;
    }
}

contract SendETH {
    constructor() payable {}

    receive() external payable {}

    error SendFailed();

    error CallFailed();

    function transferETH (address payable _to, uint256 amount) external payable {
        _to.transfer(amount);
    }

    function sendETH (address payable _to, uint256 amount) external payable {
        bool success = _to.send(amount);
        if (!success) {
            revert SendFailed();
        }
    }

    function callETH (address payable _to, uint256 amount) external payable {
        (bool success, ) = _to.call{value: amount}("");
        if (!success) {
            revert CallFailed();
        }
    }
}