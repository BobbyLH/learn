use std::io;

fn main() {
    // 2.4.1
    // let s = String::from("hello world");

    // let hello = &s[0..5];
    // let world = &s[6..11];
    // println!("{}, {}", hello, world);

    // let slice = &s[0..2];
    // let slice = &s[..2];
    // let len = s.len();

    // let slice = &s[4..len];
    // let slice = &s[4..];

    // let slice = &s[0..len];
    // let slice = &s[..];

    // let s = "中国人";
    // let a = &s[0..2];
    // println!("{}",a)

    // let mut s = String::from("hello world");

    // let word = first_word(&s);
    // println!("the first word is: {}", word);
    // s.clear();

    // fn first_word(s: &String) -> &str {
    //     &s[..1]
    // }

    // let a = [1, 2, 3, 4, 5];

    // let slice = &a[1..3];

    // assert_eq!(slice, &[2, 3]);

    // let s = String::from("hello,world!");
    // say_hello(&s);
    // say_hello(&s[..]);
    // say_hello(s.as_str());

    // fn say_hello(s: &str) {
    //     println!("{}",s);
    // }

    // let s = String::from("नमस्ते");

    // let mut s = String::from("Hello ");

    // s.push_str("rust");
    // println!("push_str() -> {}", s);

    // s.push('!');
    // println!("push() -> {}", s);

    // let mut s = String::from("Hello rust!");
    // s.insert(5, ',');
    // println!("插入字符 insert() -> {}", s);
    // s.insert_str(6, " I like");
    // println!("插入字符串 insert_str() -> {}", s);

    // let string_replace = String::from("I like rust. Learning rust is my favorite!");
    // let new_string_replace = string_replace.replace("rust", "RUST");
    // dbg!(new_string_replace);

    // let string_replace = "I like rust. Learning rust is my favorite!";
    // let new_string_replacen = string_replace.replacen("rust", "RUST", 1);
    // dbg!(new_string_replacen);

    // let mut string_replace_range = String::from("I like rust!");
    // string_replace_range.replace_range(7..8, "R");
    // dbg!(string_replace_range);

    // let mut string_pop: String = String::from("rust pop 中文!");
    // let p1 = string_pop.pop();
    // let p2 = string_pop.pop();
    // dbg!(p1);
    // dbg!(p2);
    // dbg!(string_pop);

    // let mut string_remove = String::from("测试remove方法");
    // println!(
    //     "string_remove 占 {} 个字节",
    //     std::mem::size_of_val(string_remove.as_str())
    // );
    // let delete_word = string_remove.remove(3);
    // dbg!(delete_word);
    // dbg!(string_remove);

    // let mut string_truncate = String::from("测试truncate");
    // string_truncate.truncate(3);
    // dbg!(string_truncate);

    // let mut string_clear = String::from("string clear");
    // string_clear.clear();
    // dbg!(string_clear);

    // let string_append = String::from("hello ");
    // let string_rust = String::from("rust");
    // let result = string_append + &string_rust;
    // let mut result: String = result + "!"; // `result + "!"` 中的 `result` 是不可变的
    // result += "!!!";
    // dbg!(result);

    // let s1 = "hello";
    // let s2 = String::from("rust");
    // let s = format!("{} {}!", s1, s2);
    // println!("{}", s);

    // let byte_escape = "I'm writing \x52\x75\x73\x74!";
    // println!("What are you doing\x3F (\\x3F means ?) {}", byte_escape);

    // // \u 可以输出一个 unicode 字符
    // let unicode_codepoint = "\u{211D}";
    // let character_name = "\"DOUBLE-STRUCK CAPITAL R\"";

    // println!(
    //     "Unicode character {} (U+211D) is called {}",
    //     unicode_codepoint, character_name
    // );

    // let long_string = "String literals
    //                     can span multiple lines.
    //                     The linebreak and indentation here ->\
    //                     <- can be escaped too!";
    // println!("{}", long_string);

    // println!("{}", "hello \\x52\\x75\\x73\\x74");
    // let raw_str = r"Escapes don't work here: \x3F \u{211D}";
    // println!("{}", raw_str);

    // // 如果字符串包含双引号，可以在开头和结尾加 #
    // let quotes = r#"And then I said: "There is no escape!""#;
    // println!("{}", quotes);

    // // 如果还是有歧义，可以继续增加，没有限制
    // let longer_delimiter = r###"A string with "# in it. And even "##!"###;
    // println!("{}", longer_delimiter);

    // for c in "中国人".chars() {
    //     println!("{}", c);
    // }

    // for b in "中国人".bytes() {
    //     println!("{}", b);
    // }

    // 2.4.2
    // let tup: (i32, f64, u8) = (500, 6.4, 1);
    // let (x, y, z) = tup;
    // println!("The value of tup: {}(x), {}(y), {}(x)", x, y, z);
    // println!("The value of tup: {}(tup.0), {}(tup.1), {}(tup.2)", tup.0, tup.1, tup.2);

    // fn calculate_length(s: String) -> (String, usize) {
    //     let length = s.len(); // len() 返回字符串的长度
    
    //     (s, length)
    // }
    // let s1 = String::from("hello");

    // let (s2, len) = calculate_length(s1);

    // println!("The length of '{}' is {}.", s2, len);

    // 2.4.3
    // struct User {
    //     active: bool,
    //     username: String,
    //     email: String,
    //     sign_in_count: u64,
    // }
    // let mut user1 = User {
    //     email: String::from("someone@example.com"),
    //     username: String::from("someusername123"),
    //     active: true,
    //     sign_in_count: 1,
    // };

    // user1.email = String::from("anotheremail@example.com");

    // fn build_user(email: String, username: String) -> User {
    //     User {
    //         email,
    //         username,
    //         active: true,
    //         sign_in_count: 1,
    //     }
    // }

    // let user2 = User {
    //     email: String::from("another@example.com"),
    //     ..user1
    // };

    // println!("{}", user1.active);
    // // error
    // println!("{:?}", user1);
    

    // #[derive(Debug)]
    // struct File {
    //     name: String,
    //     data: Vec<u8>,
    // }

    // let f1 = File {
    //     name: String::from("f1.txt"),
    //     data: Vec::new(),
    // };

    // let f1_name = &f1.name;
    // let f1_length = &f1.data.len();

    // println!("{:?}", f1);
    // println!("{} is {} bytes long", f1_name, f1_length);

    // struct Color(i32, i32, i32);
    // struct Point(i32, i32, i32);

    // let black = Color(0, 0, 0);
    // let origin = Point(0, 0, 0);

    // struct AlwaysEqual;

    // let subject = AlwaysEqual;

    // impl SomeTrait for AlwaysEqual {

    // }

    // #[derive(Debug)]
    // struct Rectangle {
    //     width: u32,
    //     height: u32,
    // }

    // let scale = 2;
    // let rect1 = Rectangle {
    //     width: dbg!(30 * scale),
    //     height: 50,
    // };

    // dbg!(&rect1);

    // 2.4.4
    // #[derive(Debug)]
    // enum PokerSuit {
    //     Clubs,
    //     Spades,
    //     Diamonds,
    //     Hearts,
    // }

    // let heart = PokerSuit::Hearts;
    // let diamond = PokerSuit::Diamonds;

    // fn print_suit(card: PokerSuit) {
    //     println!("{:?}",card);
    // }
    // print_suit(heart);
    // print_suit(diamond);

    // #[derive(Debug)]
    // struct PokerCard {
    //     suit: PokerSuit,
    //     value: u8
    // }
    // let c1 = PokerCard {
    //     suit: PokerSuit::Clubs,
    //     value: 1,
    // };
    // let c2 = PokerCard {
    //     suit: PokerSuit::Diamonds,
    //     value: 12,
    // };

    // enum PokerCard {
    //     Clubs(u8),
    //     Spades(u8),
    //     Diamonds(char),
    //     Hearts(char),
    // }
    // let c1 = PokerCard::Spades(5);
    // let c2 = PokerCard::Diamonds('A');

    // struct Ipv4Addr {
    //     // --snip--
    // }
    
    // struct Ipv6Addr {
    //     // --snip--
    // }
    
    // enum IpAddr {
    //     V4(Ipv4Addr),
    //     V6(Ipv6Addr),
    // }

    // enum Message {
    //     Quit,
    //     Move { x: i32, y: i32 },
    //     Write(String),
    //     ChangeColor(i32, i32, i32),
    // }

    // let m1 = Message::Quit;
    // let m2 = Message::Move{x:1,y:1};
    // let m3 = Message::ChangeColor(255,255,0);

    // 2.4.5
    // let a = [3; 5];
    // println!("{:?}", a);

    // let a = [1, 2, 3, 4, 5];

    // println!("Please enter an array index.");

    // let mut index = String::new();
    // io::stdin()
    //     .read_line(&mut index)
    //     .expect("Failed to read line");

    // let index: usize = index
    //     .trim()
    //     .parse()
    //     .expect("Index entered was not a number");

    // let element = a[index];

    // println!(
    //     "The value of the element at index {} is: {}",
    //     index, element
    // );

    // let array: [String; 8] = std::array::from_fn(|_i| String::from("rust is good!"));

    // println!("{:#?}", array);

    // let a: [i32; 5] = [1, 2, 3, 4, 5];

    // let slice: &[i32] = &a[1..3];

    // assert_eq!(slice, &[2, 3]);

    // let one             = [1, 2, 3];
    // let two: [u8; 3]    = [1, 2, 3];
    // let blank1          = [0; 3];
    // let blank2: [u8; 3] = [0; 3];

    // let arrays: [[u8; 3]; 4]  = [one, two, blank1, blank2];

    // for a in &arrays {
    //     print!("{:?}: ", a);
    //     for n in a.iter() {
    //         print!("\t{} + 10 = {}", n, n+10);
    //     }

    //     let mut sum = 0;
    //     for i in 0..a.len() {
    //         sum += a[i];
    //     }
    //     println!("\t({:?} = {})", a, sum);
    // }
}
