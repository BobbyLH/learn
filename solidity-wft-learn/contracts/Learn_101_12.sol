// SPDX-License-Identifier: MIT
pragma solidity ~0.8.26;

contract Events {
    mapping(address => uint256) public _balances;

    event Transfer(address indexed from, address indexed to, uint256 value);

    function _transfer(
        address from,
        address to,
        uint256 amount
    ) external {
        if (_balances[from] <= 0) {
            _balances[from] = 10000000;
        }

        _balances[from] -= amount;
        _balances[to] += amount;

        emit Transfer(from, to, amount);
    }
}