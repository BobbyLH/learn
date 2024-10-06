fn main() {
    // 2.3.1
    // let mut s = String::from("hello");

    // s.push_str(", world!");

    // println!("{}", s);

    // let x: &str = "hello, world";
    // let y = x;
    // println!("{},{}",x,y);

    // let s1 = String::from("hello");
    // let s2 = s1.clone();

    // println!("s1 = {}, s2 = {}", s1, s2);

    // let s = String::from("hello");
    
    // takes_ownership(s);

    // let x = 5;

    // makes_copy(x);
    
    // fn takes_ownership(some_string: String) {
    //     println!("{}", some_string);
    // }
    
    // fn makes_copy(some_integer: i32) {
    //     println!("{}", some_integer);
    // }

    // let s1 = gives_ownership();

    // let s2 = String::from("hello");

    // let s3 = takes_and_gives_back(s2);

    // fn gives_ownership() -> String {
    //     let some_string = String::from("hello");
    //     some_string
    // }

    // fn takes_and_gives_back(a_string: String) -> String {
    //     a_string
    // }

    // println!("s1: {}, s3: {}", s1, s3);

    // 2.3.2
    // let x = 5;
    // let y = &x;

    // assert_eq!(5, x);
    // assert_eq!(5, *y);

    // let s1 = String::from("hello");

    // let len = calculate_length(&s1);

    // println!("The length of '{}' is {}.", s1, len);
    // fn calculate_length(s: &String) -> usize {
    //     s.len()
    // }

    // let mut s = String::from("hello");

    // {
    //     let r1 = &mut s;
    //     println!("{}", r1);
    // }
    // let r2 = &mut s;
    // println!("{}", r2);

    // let mut s = String::from("hello");

    // let r1 = &s;
    // let r2 = &s;
    // println!("{} and {}", r1, r2);

    // let r3 = &mut s;
    // println!("{}", r3);

    // let reference_to_nothing = dangle();
    // fn dangle() -> String {
    //     let s = String::from("hello");
    //     s
    // }
}
