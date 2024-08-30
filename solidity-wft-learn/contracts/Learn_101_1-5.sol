// SPDX-License-Identifier: MIT
pragma solidity ~0.8.26;

contract HelloWeb3 {
    string public str = "Hello Web3";

    address public owner = 0x7A58c0Be72BE218B41C608b7Fe7C5bB630736C71;
    address payable public admin = payable (owner);
    // uint256 public balance = admin.balance;

    bytes32 public arrBytes32 = "Minisolidity";
    bytes1 public arrBytes = arrBytes32[0];

    uint8 public number = 5;

    uint[] x = [1, 2, 3];

    enum ActionSet { Buy, Hold, Sell }
    ActionSet public action = ActionSet.Hold;

    function enum2Unit() external view returns(uint) {
        return uint(action);
    }

    function addDefault() external {
        number = number + 1;
    }

    function addPure(uint8 num) external pure returns (uint8 new_number) {
        new_number = num + 1;
    }

    function addView() external view returns(uint8 new_number) {
        new_number = number + 1;
    }

    function minus() internal {
        number = number - 1;
    }

    function callMinus() external  {
        minus();
    }

    function minusPayable() external payable returns (uint256 balance) {
        minus();
        balance = address(this).balance;
    }

    function returnMultiple() public pure returns (uint256, bool, uint256[3] memory) {
        return (1, true, [uint256(1), 2, 5]);
    }

    function returnNamed() public pure returns (uint256 _number, bool _bool, uint256[3] memory _array) {
        _number = 2;
        _bool = true;
        _array = [uint256(3), 5, 9];
    }

    function desturctReturnVal() public pure returns (bool) {
        uint256 _num;
        bool _bool;
        bool _bool2;
        uint256[3] memory _arr;
        (_num, _bool, _arr) = returnNamed();
        (, _bool2, ) = returnNamed();
        return _bool == _bool2;
    }

    function fCallData(uint[] calldata _x) public pure returns(uint[] calldata) {
        return (_x);
    }

    function fStorage() public {
        uint[] storage xStorage = x;
        xStorage[0] = 100;
    }

    function fMemory() public view {
        uint[] memory xMemory = x;
        xMemory[0] = 100;
    }

    function global () external payable  returns (address, uint, bytes calldata) {
        address sender = msg.sender;
        bytes calldata data = msg.data;
        // bytes4 sig = msg.sig;
        // uint value = msg.value;
        uint blockNum = block.number;
        // uint ts = block.timestamp;
        // uint gaslimit = block.gaslimit;
        // address coinbase = block.coinbase;
        // bytes32 hash = blockhash(blockNum);
        // uint gasleft = gasleft();

        return (sender, blockNum, data);
    }
}