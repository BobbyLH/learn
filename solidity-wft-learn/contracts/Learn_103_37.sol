// SPDX-License-Identifier: MIT
pragma solidity ~0.8.26;

contract Sig {
    function getMsgHash(address account_, uint256 tokenId_) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(account_, tokenId_));
    }

    function toEthSignedMessageHash(bytes32 hash) public pure returns (bytes32) {
        return keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", hash));
    }
}