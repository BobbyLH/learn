// SPDX-License-Identifier: MIT
pragma solidity ~0.8.26;

import 'https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Address.sol';

import '@openzeppelin/contracts/access/Ownable.sol';

import { UseLib } from './Learn_102_17.sol';

contract Import {
    event Log(string msg);

    using Address for address;

    UseLib lib = new UseLib();

    function test() external payable {
        string memory str = lib.getString1(5536);
        emit Log(str);
    }
}
