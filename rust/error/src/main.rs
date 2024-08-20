use std::net::IpAddr;
use std::error::Error;
use std::fs::{ self, File };
use std::io::{ self, Read, ErrorKind };

// fn read_username_from_file () -> Result<String, io::Error> {
//     let username_file_res = File::open("hello.txt");

//     let mut username_file = match username_file_res {
//         Ok(file) => file,
//         Err(e) => return Err(e)
//     };

//     let mut username = String::new();

//     match username_file.read_to_string(&mut username) {
//         Ok(_) => Ok(username),
//         Err(e) => Err(e)
//     }
// }

// fn read_username_from_file() -> Result<String, io::Error> {
//     let mut username_file = File::open("hello.txt")?;
//     let mut username: String = String::new();
//     username_file.read_to_string(&mut username)?;
//     Ok(username)
// }

// fn read_username_from_file() -> Result<String, io::Error> {
//     let mut username = String::new();

//     File::open("hello.txt")?.read_to_string(&mut username)?;

//     Ok(username)
// }

fn read_username_from_file() -> Result<String, io::Error> {
    fs::read_to_string("hello.txt")
}

fn last_char_of_first_line(txt: &str) -> Option<char> {
    txt.lines().next()?.chars().last()
}

fn parse_ip () -> IpAddr {
    "127.0.0.1".parse().expect("Local IP Address")
}

pub struct Guess {
    value: i32,
}

impl Guess {
    pub fn new(val: i32) -> Guess {
        if val < 1 || val > 100 {
            panic!("Guess value must be between 1 and 100, got {val}.")
        }
        Guess { value: val }
    }

    pub fn value(&self) -> i32 {
        self.value
    }
}

fn main() -> Result<(), Box<dyn Error>> {
    // panic!("crash and burn")
    // let v = vec![1, 2, 3];
    // v[99];

    // let file_res = File::open("hello.txt");
    // let _file_data = match file_res {
    //     Ok(file) => file,
    //     Err(error) => match error.kind() {
    //         ErrorKind::NotFound => match File::create("hello.txt") {
    //             Ok(fc) => fc,
    //             Err(e) => panic!("Problem creating the file: {e:?}")
    //         },
    //         other_error => {
    //             panic!("Problem opening the file: {other_error:?}");
    //         }
    //     }
    // };

    // let _file_data = File::open("hello.txt").unwrap_or_else(|error| {
    //     if error.kind() == ErrorKind::NotFound {
    //         File::create("hello.txt").unwrap_or_else(|err| {
    //             panic!("Problem creating the file: {err:?}");
    //         })
    //     } else {
    //         panic!("Problem opening the file: {error:?}")
    //     }
    // });

    // let _file_data = File::open("hello.txt").unwrap();

    // let _file_data = File::open("hello.txt")
    //     .expect("hello.txt should be included in this project");

    // let uname = read_username_from_file().unwrap();
    // println!("Username is: {:#?}", uname);

    let g: Guess = Guess::new(177);
    println!("guess value is: {}", g.value);

    let greeting_file = File::open("hello.txt")?;
    println!("Data is: {:#?}", greeting_file);
    Ok(())
}
