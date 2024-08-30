// SPDX-License-Identifier: MIT
pragma solidity ~0.8.26;

contract InitValue {
    uint256 public constant CONSTANT_NUM = 0;
    string public constant CONSTANT_STR = "0xAA";
    bytes public constant CONSTANT_BYTES = "WFT";
    address public constant CONSTANT_ADDRESS = 0x0000000000000000000000000000000000000000;
    
    uint256 public immutable IMMUTABLE_NUM = 99999;
    address public immutable IMMUTABLE_ADDR;
    uint256 public immutable IMMUTABLE_BLOCK;
    uint256 public immutable IMMUTABLE_TEST;

    constructor () {
        IMMUTABLE_NUM = 8;
        IMMUTABLE_ADDR = address(this);
        IMMUTABLE_BLOCK = block.number;
        IMMUTABLE_TEST = test();
    }

    function test() public pure returns(uint256) {
        uint256 what = 9;
        return (what);
    }

    // function modifyImmutable () external {
    //     IMMUTABLE_NUM = 12;
    // }
}