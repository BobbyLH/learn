fn main() {
    // let mut s = String::from("Hello");

    // let r1 = &s;
    // let r2 = &s;
    // println!("{} and {}", r1, r2);

    // let r3 = & mut s;

    // println!("r3: {}", r3);

    // let r4 = &s;
    // println!("r4: {}", r4);

    // let mut s = String::from("Hello World!");

    // let hello = &s[0..5];
    // let world = &s[6..11];
    // let hello = &s[..5];
    // let world = &s[6..];
    // let whole = &s[..];
    
    // let word = first_word(&s);

    // println!("before: {}, {}", word, s);

    // s.clear();

    // println!("after: {}, {}", word, s);

    // let a = [1, 2, 3, 4, 5];
    // let slice = &a[1..3];
    // assert_eq!(slice, &[2, 3]);
    // println!("Data: {:?}", &a[4..]);
}


fn first_word(s: &str) -> &str {
    let bytes = s.as_bytes();

    for (i, &item) in bytes.iter().enumerate() {
        if item == b' ' {
            return &s[0..i];
        }
    }

    &s[..]
}

