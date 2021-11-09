package logic

import (
	"golang.org/x/crypto/bcrypt"
)

func Fn_hashing(password string) (string, error) {
	hash, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return "", err
	}
	return string(hash)[24:], nil
}