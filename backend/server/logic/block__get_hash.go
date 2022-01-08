package logic_server

import (
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"strconv"

	"github.com/FX-KNUT/fc-/backend/server/logic/fx_framework"
)

const salt string = "hello world! hail to f(x) and KNUT."

func block_calculator(cuisine string) string {

	hash := sha256.New()

	hash.Write([]byte(cuisine))

	md := hash.Sum(nil)

	str := hex.EncodeToString(md)

	bin := fx_framework.Conv_hex_to_bin(str)

	return bin

}

func Block_get_hash(index int, prev_hash string, timestamp string, tx_id string) (ret_bin string) {

	mixed_str := strconv.Itoa(index) + prev_hash + timestamp + tx_id

	cuisine := mixed_str + salt

	bin := block_calculator(cuisine)

	ret_bin = fx_framework.Reverse(bin)

	return
}

func Block_compare_hash(_hash string, nonce int, difficulty int) bool {

	cuisine := _hash + strconv.Itoa(nonce)

	bin := block_calculator(cuisine)

	sliced := bin[:difficulty]

	converted, err := strconv.Atoi(sliced)

	if err != nil {
		fmt.Println("Error occured on block__get_hash.go > Block_compare_hash")
		return false
	}

	if converted == 0 {
		return true
	}

	return false
}