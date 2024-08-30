// SPDX-License-Identifier: MIT
pragma solidity ~0.8.26;

contract ArrayStructType {
    uint[8] fixedLenUintArr;
    bytes1[5] fixedLenBytesArr;
    address[100] fixedLenAddrArr;

    uint[] dynLenUintArr;
    // bytes1[] dynLenBytesArr;
    // less consume than bytes1[]
    bytes dynLenBytesArr;
    address[] dynLenAddrArr;

    function initParams () external returns (uint[] memory, bytes memory, uint8) {
        uint[] memory fixedLenUintMemoryArr = new uint[](5);
        bytes memory fixedLenBytesMemoryArr = new bytes(9);

        fixedLenUintMemoryArr[0] = 123;
        fixedLenUintMemoryArr[1] = 5509;

        dynLenUintArr.push();
        dynLenUintArr.push(4);
        dynLenUintArr.push(6);
        dynLenUintArr.pop();

        return (fixedLenUintMemoryArr, fixedLenBytesMemoryArr, uint8(dynLenUintArr.length));
    }

    struct Student {
        uint256 id;
        uint256 score;
    }

    Student student;

    function initStudent1() external {
        Student storage _student = student;
        _student.id = 11;
        _student.score = 100;
    }

    function initStudent2() external {
        student.id = 5;
        student.score = 87;
    }

    function initStudent3() external {
        student = Student(3, 90);
    }

    function initStudent4() external {
        student = Student({ id: 4, score: 88 });
    }
}