fn main() {
    let _x = 2.0;

    let _y: f32 = 3.0;

    let _sum = 5 + 10;

    let _diff = 95.5 - 4.5;

    let _product = 4 * 30;

    let _quotient = 50.7 / 31.3;

    let _truncated = -5 / 3;

    let _remainder = 58 % 3;

    let _c = 'z';

    let _z: char = 'ℤ';

    let _pig = '🐷';

    let _tup: (i32, f64, u8) = (500, 4.45, 255);

    let f = _tup.1;
    println!("The f value are {f}");

    let tup1 = (500, 4.45, 25);

    let (x, y, z) = tup1;

    println!("The tup1 value are {x}, {y}, {z}");

    let arr = [1,2,3,4,5,6];
    let _first = arr[0];
    let _second = arr[1];

    let array = [3; 5];

    println!("The array value {:?}", array);
}
