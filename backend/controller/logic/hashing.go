package logic_hashing

import (
	"crypto/sha256"
	"encoding/hex"
)

func Fn_hashing(cuisine string) (string, error) {

	hash := sha256.New()

	hash.Write([]byte(cuisine))

	md := hash.Sum(nil)

	str := hex.EncodeToString(md)

	return str[:60], nil

}

// func Fn_hashing(password string) (string, error) {
// 	hash, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
// 	if err != nil {
// 		return "", err
// 	}
// 	return string(hash)[24:], nil
// }
