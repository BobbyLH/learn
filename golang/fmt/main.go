package main

import (
	"fmt"
)

func main() {
	var name string
	var age int

	fmt.Print("Enter your name: ")
	fmt.Scan(&name) // 读取一个字符串输入
	fmt.Print("Enter your age: ")
	fmt.Scan(&age) // 读取一个整数输入

	fmt.Printf("Hello, %s! You are %d years old.\n", name, age)
}
