// SPDX-License-Identifier: MIT
pragma solidity ~0.8.26;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Faucet{
    uint256 public amountAllowed = 100;
    address public tokenContract;
    mapping(address => bool) public requestAddress;
    
    event SendToken(address indexed Receiver, uint256 indexed Amount);

    constructor(address _tokenContract) {
        tokenContract = _tokenContract;
    }

    function requestTokens() external {
        require(!requestAddress[msg.sender], "Can't request multiple times!");
        IERC20 token = IERC20(tokenContract);
        require(token.balanceOf(address(this)) >= amountAllowed, "Faucet Empty!");

        token.transfer(msg.sender, amountAllowed);
        requestAddress[msg.sender] = true;

        emit SendToken(msg.sender, amountAllowed);
    }
}




