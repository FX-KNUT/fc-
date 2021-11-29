package db

// import (
// 	"testing"

// 	"github.com/joho/godotenv"
// )

// func TestConnection(t *testing.T) {
// 	err := godotenv.Load("../tmp.env")

// 	if err != nil {
// 		t.Errorf("환경변수 연결 문제:%v", err)
// 	}
// 	Init()

// 	db := Fn_access_db()

// 	defer db.Close()
// }