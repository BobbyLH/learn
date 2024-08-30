// SPDX-License-Identifier: MIT
pragma solidity ~0.8.26;

abstract contract AbstractSortMethods {
    function QuickSort(uint[] memory a) public pure virtual returns (uint[] memory);

    function BubbleSort(uint[] memory a) public pure virtual returns (uint[] memory);

    function InsertSort(uint[] memory a) public pure virtual returns (uint[] memory);
}

interface IERC165 {
    function supportsInterface(bytes4 interfaceID) external view returns (bool);
}
interface IERC721 is IERC165 {
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);

    function balanceOf(address owner) external view returns (uint256 balance);

    function ownerOf(uint256 tokenId) external view returns (address owner);

    function safeTransferFrom(address from, address to, uint256 tokenId) external;

    function transferFrom(address from, address to, uint256 tokenId) external;

    function approve(address to, uint256 tokenId) external;

    function getApproved(uint256 tokenId) external view returns (address operator);

    function setApprovalForAll(address operator, bool _approved) external;

    function isApprovedForAll(address owner, address operator) external view returns (bool);

    function safeTransferFrom( address from, address to, uint256 tokenId, bytes calldata data) external;
}

contract interfaceBAYC {
    IERC721 BAYC = IERC721(0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D);

    function balanceOfBAYC(address owner) external view returns(uint256 balance) {
        return BAYC.balanceOf(owner);
    }

    function safeTransferFromBAYC(address from, address to, uint256 tokenId) external {
        BAYC.safeTransferFrom(from, to, tokenId);
    }
}