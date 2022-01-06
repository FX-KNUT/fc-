package fx_framework

import "time"

func Timestamp() string {
	return time.Now().String()[:19]
}