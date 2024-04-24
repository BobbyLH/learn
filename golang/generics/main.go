package main

import "fmt"

func SumInts(m map[string]int64) int64 {
	var s int64

	for _,v := range m {
		s += v
	}

	return s
}

func SumFloats(m map[string]float64) float64 {
	var s float64

	for _,v := range m {
		s += v
	}

	return s
}

type Number interface {
	int64 | float64
}

func SumNumbers[K comparable, V Number](m map[K]V) V {
	var s V

	for _,v := range m {
		s += v
	}

	return s
}

func main () {
	ints := map[string]int64 {
		"first": 55,
		"second": 69,
	}

	floats := map[string]float64 {
		"first": 55.334,
		"second": 69.564,
	}

	fmt.Printf("Sum: %v and %v\n", SumNumbers(ints), SumNumbers(floats))
}