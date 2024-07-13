#[derive(Debug)]
enum IpAddr {
    V4(u8, u8, u8, u8),
    V6(String),
}

enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(i32, i32, i32),
}

impl Message {
    fn call(&self) {
        println!("Write Data")
    }
}

// enum Option<T> {
//     None,
//     Some(T),
// }

#[derive(Debug)]
enum UsState {
    Alabama,
    Alaska,
}

enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter(UsState),
}

fn value_in_cents(coin: Coin) -> u8 {
    match coin {
        Coin::Penny => {
            println!("Lucky penny!");
            1
        },
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter(state) => {
            println!("State quarter from {state:?}!");
            25
        },
    }
}

fn plus_one(x: Option<i32>) -> Option<i32> {
    match x {
        None => None,
        Some(i) => Some(i + 1),
    }
}

fn main() {
    let home = IpAddr::V4(127, 0, 0, 1);
    let loopback = IpAddr::V6(String::from("::1"));

    println!("IP is {home:?} and {loopback:?}");

    let m = Message::Write(String::from("Hello"));
    m.call();

    let some_number = Some(5);
    let some_char = Some('e');

    let absent_number: Option<i32> = None;

    let x: i8 = 5;
    let y: Option<i8> = Some(5);

    let sum = match y {
        None => x,
        Some(i) => x + i
    };
    println!("sum: {}", sum);

    let five = Some(5);
    let six = plus_one(five);
    let none = plus_one(None);

    println!("six: {:?}; none: {:?}", six, none);

    let dice_roll: u8 = 9;
    match dice_roll {
        3 => {
            println!("add fancy hat");
        },
        7 => {
            println!("remove fancy hat");
        },
        _ => ()
    }

    let config_max = Some(5u8);
    // match config_max {
    //     Some(max) => println!("The maximum is configured to be {max}"),
    //     _ => ()
    // }
    if let Some(max) = config_max {
        println!("The maximum is configured to be {max}");
    }

    let alaska_quarter = Coin::Quarter(UsState::Alaska);
    let penney = Coin::Penny;

    let mut counter = 0;

    let mut coin_calc = |coin: Coin| {
        match coin {
            Coin::Quarter(state) => println!("State quarter from {state:?}!"),
            _ => counter += 1,
        }
    };

    // match penney {
    //     Coin::Quarter(state) => println!("State quarter from {state:?}!"),
    //     _ => counter += 1,
    // }
    // if let Coin::Quarter(state) = alaska_quarter {
    //     println!("State quarter from {state:?}!");
    // } else {
    //     counter += 1;
    // }

    coin_calc(alaska_quarter);
    coin_calc(penney);

    println!("The counter is {}", counter)

}
