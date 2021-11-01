package entity

type User struct {
	id        string `json:"id"`
	name      string `json:"name"`
	nickname  string `json:"nickname"`
	hashed_pw string `json:"hashed_pw"`
	email     string `json:"email"`
	balance   int    `json:"balance"`
}