// SPDX-License-Identifier: MIT
pragma solidity ~0.8.26;

contract Grandfather {
    uint256 public x = 5;
    uint256 internal y = 10;
    uint256 private z = 20;

    event Log(string msg);

    function hip() public virtual {
        emit Log("Grandfather");
    }

    function pop() public virtual {
        emit Log("Grandfather");
    }

    function grandfather() public virtual {
        emit Log("Grandfather");
    }

    function setX(uint256 _x) public {
        x = _x;
    }

    function getZ() public view returns (uint256) {
        return z;
    }
}

contract Father is Grandfather {
    function hip() public virtual override {
        emit Log("Father");
    }

    function pop() public virtual override {
        emit Log("Father");
    }

    function father() public virtual {
        emit Log("Father");
    }

    function callParent() public {
        Grandfather.pop();
    }

    function changeState(uint256 _x, uint256 _y) public {
        x = _x;
        y = _y;
    }

    function readState() public view returns(uint256, uint256) {
        return (x, y);
    }
}

contract Son is Grandfather, Father {
    function hip() public virtual override(Grandfather, Father) {
        emit Log("Son");
    }

    function pop() public virtual override(Grandfather, Father) {
        emit Log("Son");
    }

    function callParentSuper() public {
        super.pop();
        Grandfather.pop();
    }
}

contract Base1 {
    modifier exactDividedBy2And3(uint _a) virtual {
        require(_a % 2 == 0 && _a % 3 == 0);
        _;
    }
}

contract Indentifier is Base1 {
    function getExactDivdedBy2And3(uint _dividend) public exactDividedBy2And3(_dividend) pure returns(uint, uint) {
        return getExactDividedBy2And3WithoutModifier(_dividend);
    }

    function getExactDividedBy2And3WithoutModifier(uint _dividend) public pure returns(uint, uint) {
        uint div2 = _dividend / 2;
        uint div3 = _dividend / 3;
        return (div2, div3);
    }

    // modifier exactDividedBy2And3(uint _a) override {
    //     _;
    //     require(_a % 2 == 0 && _a % 3 == 0);
    // }
}

abstract contract A {
    uint public a;

    constructor(uint _a) {
        a = _a;
    }
}

contract B is A(1) {}

contract C is A {
    constructor(uint _c) A(_c * _c) {}
}

contract God {
    event Log(string message);

    function foo() public virtual {
        emit Log("God.foo called");
    }

    function bar() public virtual {
        emit Log("God.bar called");
    }
}

contract Eva is God {
    function foo() public virtual override {
        emit Log("Eva.foo called");
        super.foo();
    }

    function bar() public virtual override {
        emit Log("Eva.bar called");
        super.bar();
    }
}

contract Adam is God {
    function foo() public virtual override {
        emit Log("Adam.foo called");
        super.foo();
    }

    function bar() public virtual override {
        emit Log("Adam.bar called");
        super.bar();
    }
}

contract People is Adam, Eva {
    function foo () public override(Adam, Eva) {
        super.foo();
    }

    function bar () public override(Adam, Eva) {
        super.bar();
    }
}