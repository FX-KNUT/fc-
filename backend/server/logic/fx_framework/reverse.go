package fx_framework

func Reverse(str string) string {
	// convert string into an array of runes (guess this is better than []char)
	runes := []rune(str)
	for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
		// destructuring principle
		runes[i], runes[j] = runes[j], runes[i]
	}

	return string(runes)
}