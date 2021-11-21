package logic_hashing

import (
	"errors"

	"golang.org/x/crypto/bcrypt"
)

func Fn_hashing(s *string) (string, error) {
	if s == nil {
		panic(errors.New("fn:Fn_hashsing"))
	}

	sBytes := []byte(*s)

	hashedBytes, err := bcrypt.GenerateFromPassword(sBytes, bcrypt.DefaultCost)
	if err != nil {
		panic(err)
	}

	*s = string(hashedBytes[:])
	return *s, nil
}

// func Fn_hashing(password string) (string, error) {
// 	hash, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
// 	if err != nil {
// 		return "", err
// 	}
// 	return string(hash)[24:], nil
// }
