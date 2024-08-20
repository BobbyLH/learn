use std::fmt::{ Display, Debug };

pub trait Summary {
    fn summarize(&self) -> String;
    fn told(&self) -> String {
        String::from("(Read more…)")
    }
}

pub struct NewArticle {
    pub headline: String,
    pub location: String,
    pub author: String,
    pub content: String,
}

impl Summary for NewArticle {
    fn summarize(&self) -> String {
        format!("{}, by {} ({})", self.headline, self.author, self.location)
    }
}

pub struct Tweet {
    pub username: String,
    pub content: String,
    pub reply: bool,
    pub retweet: bool,
}

impl Summary for Tweet {
   fn summarize(&self) -> String {
       format!("{}: {}", self.username, self.content)
   } 
}

// pub fn notify<T: Summary> (item: &T) {
//     println!("Breaking news! {}", item.summarize());
// }

// pub fn notify_1(item1: & impl Summary, item2: & impl Summary) {
//     println!("Breaking news! {}", item1.summarize());
// }

pub fn notify<T: Summary + Display> (item: &T) {
    println!("Breaking news! {}", item.summarize());
}

pub fn some_fn<T, U> (t: &T, u: &U) -> i32
where 
    T: Display + Clone,
    U: Clone + Debug
{
    3
}

struct Pair<T> {
    x: T,
    y: T,
}

impl<T> Pair<T> {
    fn new(x: T, y: T) -> Self {
        Self{ x, y }
    }
}

impl<T: Display + PartialOrd> Pair<T> {
    fn cmp_display(&self) {
        if self.x >= self.y {
            println!("The largest num is x = {}", self.x);
        } else {
            println!("The largest num is y = {}", self.y);
        }
    }
}

fn main() {
    let tweet = Tweet {
        username: String::from("horse_ebooks"),
        content: String::from(
            "of course, as you probably already know, people",
        ),
        reply: false,
        retweet: false,
    };
    println!("1 new tweet: {}", tweet.told());
    // notify(&tweet);
    // let s = 3.to_string();
}
