package fx_framework

import "encoding/json"

func Stringify(_struct interface{}) (string, error) {

	marshaled, err := json.Marshal(_struct)

	if err != nil {
		return "", err
	}

	return string(marshaled), nil
}