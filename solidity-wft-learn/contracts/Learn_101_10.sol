// SPDX-License-Identifier: MIT
pragma solidity ~0.8.26;

contract ControlFlow {
    function ifElseTest(uint256 _number) public pure returns(bool) {
        if (_number == 0) {
            return (true);
        } else {
            return (false);
        }
    }

    function forLoopTest() public pure returns (uint256) {
        uint sum = 0;

        for (uint i = 0; i < 10; i++) 
        {
            sum += 1;
        }

        return (sum);
    }

    function whileTest() public pure returns (uint256) {
        uint sum = 0;
        uint i = 0;

        while (i < 10) {
            sum += 1;
            i++;
        }

        return (sum);
    }

    function doWhileTest() public pure returns (uint256) {
        uint sum = 0;
        uint i = 0;

        do {
            sum += i;
            i++;
        } while (i < 10);

        return (sum);
    }

    function ternaryTest(uint256 x, uint256 y) public pure returns(uint256) {
        return x >= y ? x : y;
    }

    function quickSort (uint[] memory arr) external pure returns (uint[] memory) {
        return _quickSort(arr);
    }

    function _quickSort (uint[] memory arr) internal pure returns (uint[] memory) {
        if (arr.length <= 1) return arr;
        uint256 pivotInd = arr.length / 2;
        uint pivot = arr[pivotInd];

        uint leftInd = 0;
        uint rightInd = 0;
        uint[] memory left = new uint[](arr.length);
        uint[] memory right = new uint[](arr.length);

        for (uint i = 0; i < arr.length; i++) 
        {
            if (pivotInd == i) continue;
            if (arr[i] < pivot) {
                left[leftInd] = arr[i];
                leftInd++;
            } else {
                right[rightInd] = arr[i];
                rightInd++;
            }
        }

        uint[] memory leftResized = new uint[](leftInd);
        uint[] memory rightResized = new uint[](rightInd);
        for (uint i = 0; i < leftInd; i++) 
        {
            leftResized[i] = left[i];
        }

        for (uint i = 0; i < rightInd; i++) 
        {
            rightResized[i] = right[i];
        }

        uint[] memory sortedLeft = _quickSort(leftResized);
        uint[] memory sortedRight = _quickSort(rightResized);

        return concat(sortedLeft, pivot, sortedRight);
    }

    function concat (
        uint[] memory left,
        uint pivot,
        uint[] memory right
    ) internal pure returns (uint[] memory) {
        uint[] memory result = new uint[](left.length + 1 + right.length);

        for (uint i = 0; i < left.length; i++) 
        {
            result[i] = left[i];
        }
        result[left.length] = pivot;
        for (uint i = 0; i < right.length; i++) 
        {
            result[left.length + 1 + i] = right[i];
        }

        return result;
    }

    function bubbleSort(uint[] memory arr) external pure returns(uint[] memory) {
        for (uint i = 0; i < arr.length; i++) 
        {
            for (uint j = i + 1; j < arr.length; j++) 
            {
                uint base = arr[i];
                uint compare = arr[j];
                if (base > compare) {
                    arr[j] = base;
                    arr[i] = compare;
                }
            }
        }

        return (arr);
    }

    function insertSort(uint[] memory arr) external pure returns(uint[] memory) {
        for (uint i = 0; i < arr.length; i++) 
        {
            uint base = arr[i];
            uint j = i;
            while(j >= 1 && base < arr[j-1]) {
                arr[j] = arr[j-1];
                j--;
            }
            arr[j] = base;
        }

        return arr;
    }
}