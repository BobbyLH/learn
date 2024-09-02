// SPDX-License-Identifier: MIT
pragma solidity ~0.8.26;

contract Hash{
    uint256 x = 10;
    address addr = 0x96789C2b0f47B3F7BbEcbB5C12a2d0eA5d9afd89;
    string name = "0xAA";
    uint256[2] array = [5, 6];

    function hash(
        uint256 _num,
        string memory _string,
        address _addr
    ) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(_num, _string, _addr));
    }

    function weak (string calldata str1) public view returns (bool) {
        return keccak256(abi.encodePacked(str1)) == keccak256(abi.encodePacked(name));
    }

    function strong (string calldata str1, string calldata str2) public pure returns (bool) {
        return keccak256(abi.encodePacked(str1)) == keccak256(abi.encodePacked(str2));
    }
}
