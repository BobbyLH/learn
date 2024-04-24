package main

import (
	"fmt"

	"log"

	"rsc.io/quote"

	"bobby_learn/greetings"

	"golang.org/x/example/hello/reverse"
)

func main() {
	log.SetPrefix("greetings: ")
	log.SetFlags(0)
	
	// message, err := greetings.Hello("Doris")
	names := []string{"Doris", "Bobby", "David"}
	messages, err := greetings.Hellos(names)

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(
		messages,
		reverse.String(quote.Go()),
		reverse.String("Hello"),
		reverse.Int(24601),
	)
}

