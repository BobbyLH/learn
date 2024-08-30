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
}
