use num::complex::Complex;
use std::mem::size_of_val;

// struct Struct {
//     e: i32
// }

fn main() {
    // 2.1
    // let mut _c = 30i32;
    // let _d = 30_i32;

    // let (a, mut b): (bool, bool) = (true, false);
    // println!("a = {:?}, b = {:?}", a, b);
    // b = true;
    // assert_eq!(a, b);

    // let (a, b, c, d, e);

    // (a, b) = (1, 2);
    // [c, .., d, _] = [1, 2, 3, 4, 5];
    // Struct { e, .. } = Struct { e: 5 };

    // assert_eq!([1, 2, 1, 4, 5], [a, b, c, d, e]);

    // const MAX_POINTS: u32 = 100_000;

    // let guess = "42".parse::<i32>().expect("Not a number");

    // assert_eq!(255u8.saturating_add(3), 255);
    // assert_eq!(u32::MAX.saturating_add(127), u32::MAX);

    // let a: u8 = 255;
    // let b = a.wrapping_add(20);
    // println!("{}", b);

    // let x = define_x();
    // println!("{}, world", x);

    // 2.2.1
    // assert!((0.1_f64 + 0.2 - 0.3).abs() < 0.00001);
    // let abc: (f32, f32, f32) = (0.1, 0.2, 0.3);
    // let xyz: (f64, f64, f64) = (0.1, 0.2, 0.3);

    // println!("abc (f32)");
    // println!("   0.1 + 0.2: {:x}", (abc.0 + abc.1).to_bits());
    // println!("         0.3: {:x}", (abc.2).to_bits());
    // println!();

    // println!("xyz (f64)");
    // println!("   0.1 + 0.2: {:x}", (xyz.0 + xyz.1).to_bits());
    // println!("         0.3: {:x}", (xyz.2).to_bits());
    // println!();

    // assert!(abc.0 + abc.1 == abc.2);
    // assert!(xyz.0 + xyz.1 == xyz.2);

    // let x = (-42.0_f32).sqrt();
    // if x.is_nan() {
    //     println!("x is NaN: {}", x);
    // }
    // assert_eq!(x, x);
    
    // let twenty = 20;
    // let twenty_one: i32 = 21;
    // let twenty_two = 22i32;

    // let addition = twenty + twenty_one + twenty_two;
    // println!("{} + {} + {} = {}", twenty, twenty_one, twenty_two, addition);

    // let a:i32 = 2;
    // let b:i32 = 3;

    // println!("(a & b) value is {}", a & b);

    // println!("(a | b) value is {}", a | b);

    // println!("(a ^ b) value is {}", a ^ b);

    // println!("(!b) value is {} ", !b);

    // println!("(a << b) value is {}", a << b);

    // println!("(a >> b) value is {}", a >> b);

    // let mut a = a;
    // a <<= b;
    // println!("(a << b) value is {}", a);

    // for i in 1..=5 {
    //     println!("{}",i); 
    // }

    // for i in 'a'..='z' {
    //     println!("{}", i);
    // }

    // let a = Complex { re: 2.1, im: -1.2 };
    // let b = Complex::new(11.1, 22.2);
    // let result = a + b;

    // println!("{} + {}i", result.re, result.im);

    // 2.2.2
    // let c = 'z';
    // let z = 'ℤ';
    // let g = '国';
    // let heart_eyed_cat = '😻';
    // println!("{}, {}, {}, {}",size_of_val(&c), size_of_val(&z), size_of_val(&g), size_of_val(&heart_eyed_cat));

    // 2.2.3
    // let y = {
    //     let x = 3;
    //     x + 1
    // };

    // println!("The value of y is: {}", y);
    // assert_eq!(ret_unit_type(), ());

    // fn forever() -> ! {
    //     loop {
    //       //...
    //     };
    // }
}

// fn define_x<'a>() -> &'a str {
//     let x = "hello";
//     x
// }

// fn ret_unit_type() {
//     let x = 1;
//     // if 语句块也是一个表达式，因此可以用于赋值，也可以直接返回
//     // 类似三元运算符，在Rust里我们可以这样写
//     let y = if x % 2 == 1 {
//         "odd"
//     } else {
//         "even"
//     };
//     // 或者写成一行
//     let z = if x % 2 == 1 { "odd" } else { "even" };
// }