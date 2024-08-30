// SPDX-License-Identifier: MIT
pragma solidity ~0.8.26;

contract ErrorHandler {
    mapping(uint256 => address) _owners;

    error TransferNotOwner();

    function transferOwner1(uint256 tokenId, address newOwner) public {
        if (_owners[tokenId] != msg.sender) {
            revert TransferNotOwner();
        }

        _owners[tokenId] = newOwner;
    }

    function transferOwner2(uint256 tokenId, address newOwner) public {
        require(_owners[tokenId] == msg.sender, "Transfer Not Owner");
         _owners[tokenId] = newOwner;
    }

    function transferOwner3(uint256 tokenId, address newOwner) public {
        assert(_owners[tokenId] == msg.sender);
        _owners[tokenId] = newOwner;
    }
}
