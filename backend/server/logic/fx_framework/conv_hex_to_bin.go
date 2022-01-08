package fx_framework

import "strconv"

func Conv_hex_to_bin(s string) (ret_str string) {
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