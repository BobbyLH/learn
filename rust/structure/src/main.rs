
use std::cmp;

struct User {
    active: bool,
    username: String,
    email: String,
    sign_in_count: u64,
}

#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}


impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }
    fn width(&self) -> bool {
        self.width > 0
    }
    fn can_hold(&self, other: &Rectangle) -> bool {
        cmp::max(self.width, self.height) > cmp::max(other.width, other.height) && cmp::min(self.width, self.height) > cmp::min(other.width, other.height)
    }
    fn square(size: u32) -> Self {
        Self {
            width: size,
            height: size
        }
    }
}

struct Color(i32, i32, i32);

struct Point(usize, usize, usize);

struct AlwaysEqual;

fn build_user(username: String, email: String) -> User {
    User {
        active: true,
        username,
        email,
        sign_in_count: 1,
    }
}

// fn area(width: u32, height: u32) -> u32 {
//     width * height
// }

fn main() {
    let mut user = build_user(String::from("Andy"), String::from("andy@gmail.com"));
    println!("Hello, world {}!", user.username);
    user.email = String::from("andy@example.com");

    let user2 = User {
        email: String::from("test@gmail.com"),
        ..user
    };

    println!("User2 Email: {}!", user2.email);

    let black = Color(0, 0, 0);
    let origin = Point(0, 0, 0);

    let subject = AlwaysEqual;


    let rect1 = Rectangle {
        width: 30,
        height: 50,
    };
    let rect2 = Rectangle {
        width: 40,
        height: 20,
    };
    let rect3 = Rectangle {
        width: 60,
        height: 30,
    };
    println!("The area of rectangle is {} square pixels", rect1.area());
    // println!("Rect is {rect:#?}");
    // dbg!(&rect1);
    println!("Can rect1 hold rect2? {}", rect1.can_hold(&rect2));
    println!("Can rect2 hold rect3? {}", rect1.can_hold(&rect3));

    let square1: Rectangle = Rectangle::square(3);
    // println!("Square1 is {square1:#?}");
    dbg!(&square1);
}
