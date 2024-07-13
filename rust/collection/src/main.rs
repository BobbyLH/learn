
use std::collections::HashMap;
use std::collections::hash_map::RandomState;

fn median(list: &Vec<f64>) -> Option<f64> {
    let mut _list = list.to_vec();
    let len = _list.len();
    if len == 0 {
        return None
    }
    _list.sort_by(|a, b| b.partial_cmp(a).unwrap());
    
    if len % 2 == 0 {
        let i = len / 2;
        Some((_list[i - 1] + _list[i]) / 2.0)
    } else {
        Some(_list[(len - 1) / 2])
    }
}

fn str_to_latin(txt: &str) -> String {
    txt.split_whitespace()
        .map(|word| to_pig_latin(word))
        .collect::<Vec<String>>()
        .join(" ")
}

fn to_pig_latin(word: &str) -> String {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let first_char = word.chars().next().unwrap();
    if vowels.contains(&first_char) {
        format!("{}-hay", word)
    } else {
        let (consonant, rest) = split_first_consonant(word);
        format!("{}-{}ay", rest, consonant)
    }
}

fn split_first_consonant(word: &str) -> (String, String) {
    let mut chars = word.chars();
    let first_char = chars.next().unwrap();
    (first_char.to_string(), chars.collect())
}



fn add_department (company: &mut HashMap<String, Vec<String>, RandomState>, name: String) -> &mut Vec<String> {
    company.entry(name).or_insert(vec![])
}

fn add_member(company: &mut HashMap<String, Vec<String>, RandomState>, department: &str, member: String) {
    if let Some(members) = company.get_mut(department) {
        members.push(member);
    }
}

fn get_all_by_department<'a> (company: &'a HashMap<String, Vec<String>, RandomState>, name: &str) -> Option<&'a Vec<String>> {
    company.get(name)
}

fn main() {
    let v = vec![1.0, 5.0, 3.0, 4.0, 6.0, 8.0, 10.5, 6.0];
    match median(&v) {
        None => (),
        Some(i) => {
            println!("median is: {}!", i);
        }
    }

    let txt = "first apple string convert example";
    let pig_latin = str_to_latin(txt);
    println!("{}", pig_latin);

    let mut one_money_company: HashMap<String, Vec<String>> = HashMap::new();
    add_department(&mut one_money_company, String::from("Sale"));
    add_department(&mut one_money_company, String::from("Tech"));
    add_department(&mut one_money_company, String::from("Market"));
    println!("company structure: {:?}", one_money_company);

    add_member(&mut one_money_company, "Sale", String::from("Alex"));
    add_member(&mut one_money_company, "Tech", String::from("Frank"));
    add_member(&mut one_money_company, "Market", String::from("Lily"));
    add_member(&mut one_money_company, "Market", String::from("Leah"));
    println!("company people: {:?}", one_money_company);

    if let Some(employees) = get_all_by_department(&mut one_money_company, "Market") {
        println!("Market people: {:?}", employees);
    } else {
        println!("Not Found!");
    }
    
}
