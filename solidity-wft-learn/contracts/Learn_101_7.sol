// SPDX-License-Identifier: MIT
pragma solidity ~0.8.26;

contract MappingType {
    mapping(uint => address) public id2Address;
    mapping(address => address) public swapPair;

    struct Student {
        uint256 id;
        uint256 score;
    }
    mapping(address => Student) public studentWallet;

    function returnMapping() internal view returns (mapping(address => address) storage _pair) {
        return swapPair;
    }

    function addAddr(uint _Key, address _Value) public {
        id2Address[_Key] = _Value;
    }
}