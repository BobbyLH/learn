// SPDX-License-Identifier: MIT
pragma solidity ~0.8.26;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import {MessageHashUtils} from "@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol";

contract Sig {
    function getMsgHash(address account_, uint256 tokenId_) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(account_, tokenId_));
    }

    function toEthSignedMessageHash(bytes32 hash) public pure returns (bytes32) {
        return keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", hash));
    }

    function recoverSigner(bytes32 msgHash, bytes memory signature_) external  pure returns (address) {
        require(signature_.length == 65, "invalid signature length");
        bytes32 r;
        bytes32 s;
        uint8 v;
        assembly {
            r := mload(add(signature_, 0x20))
            s := mload(add(signature_, 0x40))
            v := byte(0, mload(add(signature_, 0x60)))
        }

        return ecrecover(msgHash, v, r, s);
    }

    function verify(bytes32 msgHash, bytes memory signature_, address signer_) external view returns (bool) {
        return this.recoverSigner(msgHash, signature_) == signer_;
    }
}

contract SigNFT is ERC721 {
    address immutable public signer;
    mapping(address => bool) public mintedAddress;

    constructor(string memory name_, string memory symbol_, address signer_)
    ERC721(name_, symbol_)
    {
        signer = signer_;
    }

    function mint(address account_, uint256 tokenId_, bytes memory signature_) external {
        bytes32 _msgHash = getMsgHash(account_, tokenId_);
        bytes32 _ethSignedMsgHash = MessageHashUtils.toEthSignedMessageHash(_msgHash);
        require(this.verify(_ethSignedMsgHash, signature_), "Invalid Signature");
        require(!mintedAddress[account_], "Already Minted!");
        mintedAddress[account_] = true;
        _mint(account_, tokenId_);
    }

    function getMsgHash(address account_, uint256 tokenId_) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(account_, tokenId_));
    }

    function verify(bytes32 msgHash, bytes memory signature_) external view returns (bool) {
        return ECDSA.recover(msgHash, signature_) == signer;
    }
}