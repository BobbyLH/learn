// SPDX-License-Identifier: MIT
pragma solidity ~0.8.26;

contract EncodeAndDecode{
    uint256 x = 10;
    address addr = 0x96789C2b0f47B3F7BbEcbB5C12a2d0eA5d9afd89;
    string name = "0xAA";
    uint256[2] array = [5, 6];

    function encode() public view returns (bytes memory result) {
        result = abi.encode(x, addr, name, array);
    }

    function encodePacked() public view returns (bytes memory result) {
        result = abi.encodePacked(x, addr, name, array);
    }

    function encodeWithSignature() public view returns (bytes memory result) {
        result = abi.encodeWithSignature("foo(uint256,address,string,uint256[2])", x, addr, name, array);
    }

    function encodeWithSelector() public view returns (bytes memory result) {
        result = abi.encodeWithSelector(bytes4(keccak256("foo(uint256,address,string,uint256[2])")), x, addr, name, array);
    }

    function decode(bytes memory data) public pure returns (uint256 dx, address daddr, string memory dname, uint256[2] memory darray) {
        (dx, daddr, dname, darray) = abi.decode(data, (uint256, address, string, uint256[2]));
    }
}
