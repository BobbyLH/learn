fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}

// fn _longest<'a>(x: &'a str, y: &'a str) -> &'a str {
//     let res = String::from("test message");
//     res.as_str()
// }

struct ImportantExcerpt<'a> {
    part: &'a str,
}

fn main() {
    let str1 = String::from("long string");
    let result;
    {
        let str2 = String::from("xyz");
        result = longest(str1.as_str(), str2.as_str());
        println!("The longest string is {result}");
    }

    let i = ImportantExcerpt {
        part: str1.split(' ').next().unwrap(),
    };

    // println!("The longest string is {result}");
}
