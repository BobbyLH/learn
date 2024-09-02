// SPDX-License-Identifier: MIT
pragma solidity ~0.8.26;

contract DeleteContract{
    uint256 public value = 10;

    constructor() payable {}

    receive() external payable{}

    function deleteContract () external {
        selfdestruct(payable(msg.sender));
    }

    function getBalace() external view returns(uint256 balance) {
        balance = address(this).balance;
    }
}

contract DeployContract {
    struct DemoResult{
        address addr;
        uint balance;
        uint value;
    }

    constructor() payable {}

    function getBalance() external view returns(uint256 balance) {
        balance = address(this).balance;
    }

    function demo() public payable returns (DemoResult memory) {
        DeleteContract del = new DeleteContract{value: msg.value}();
        DemoResult memory res = DemoResult({
            addr: address(del),
            balance: del.getBalace(),
            value: del.value()
        });

        del.deleteContract();
        return res;
    }
}