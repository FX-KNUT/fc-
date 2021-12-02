package logic_server

import (
	"crypto/sha256"
	"encoding/hex"
	"strconv"

	"github.com/FX-KNUT/fc-/backend/server/logic/fx_framework"
)

const salt string = "hello world! hail to f(x) and KNUT."

func fn_conv_hex_to_bin(s string) (ret_str string) {
	for _, hex := range s {
		str := string(hex)
		parsed, _ := strconv.ParseInt(str, 16, 64)
		concat := ""
		for i := 0; i < 4; i++ {
			remainder := parsed % 2
			int64_to_int := int(remainder)
			Itoa := strconv.Itoa(int64_to_int)
			concat = Itoa + concat
			parsed = parsed / 2
		}
		ret_str = ret_str + string(concat)
	}
	return
}

func Block_get_hash(index int, prev_hash string, timestamp string, tx_id string) (ret_bin string) {

	hash := sha256.New()

	mixed_str := strconv.Itoa(index) + prev_hash + timestamp + tx_id

	cuisine := mixed_str + salt

	hash.Write([]byte(cuisine))

	md := hash.Sum(nil)

	str := hex.EncodeToString(md)

	bin := fn_conv_hex_to_bin(str)

	ret_bin = fx_framework.Reverse(bin)

	return
}