// SPDX-License-Identifier: MIT
pragma solidity ~0.8.26;

contract OtherContract {
    uint256 private _x = 0;

    event Log(uint256 amount, uint256 gas);

    function getBalance() view public returns(uint256) {
        return address(this).balance;
    }

    function setX(uint256 x) external payable {
        _x = x;

        if (msg.value > 0) {
            emit Log(msg.value, gasleft());
        }
    }

    function getX() external view returns(uint x) {
        x = _x;
    }
}

contract CallContract {
    function callSetX(address _addr, uint256 x) external {
        OtherContract(_addr).setX(x);
    }

    function callGetX(OtherContract _addr) external view returns (uint256 x) {
        x = _addr.getX();
    }

    function callGetX2(address _addr) external view returns (uint256 x) {
        OtherContract oc = OtherContract(_addr);
        x = oc.getX();
    }

    function setXTransferETH(address otherContract, uint256 x) external payable {
        OtherContract(otherContract).setX{value: msg.value}(x);
    }
}