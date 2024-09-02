// SPDX-License-Identifier: MIT
pragma solidity ~0.8.26;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Airdrop{
    error transferFailed();

    function getSum(uint256[] calldata _arr) public pure returns (uint256 sum) {
        for(uint256 i; i < _arr.length; i++)
            sum = sum + _arr[i];
    }

    function multiTransferToken(
        address _token,
        address[] calldata _addresses,
        uint256[] calldata _amounts
    ) external {
        require(_addresses.length == _amounts.length, "Length of Addresses and Amounts Not Equal");
        IERC20 token = IERC20(_token);
        uint256 _amountSum = getSum(_amounts);
        
        require(token.allowance(msg.sender, address(this)) >= _amountSum, "Need Approve ERC20 Token");

        for (uint8 i; i < _addresses.length; i++) 
        {
            token.transferFrom(msg.sender, _addresses[i], _amounts[i]);
        }
    }

    function multiTransferETH(
        address payable[] calldata _addresses,
        uint256[] calldata _amounts
    ) public payable {
        require(_addresses.length == _amounts.length, "Length of Addresses and Amounts Not Equal");
        uint256 _amountSum = getSum(_amounts);
        require(msg.value == _amountSum, "Transfer amount error");

        for (uint256 i; i < _addresses.length; i++) 
        {
            (bool success, ) = _addresses[i].call{value: _amounts[i]}("");
            if (!success) {
                revert transferFailed();
            }
        }
    }
}




