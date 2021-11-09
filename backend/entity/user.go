package entity

type User struct {
	id        string `json:"id" binding:"required"`
	nickname  string `json:"nickname" binding:"required"`
	hashed_pw string `json:"hashed_pw" binding:"required"`
	email     string `json:"email" binding:"required"`
	balance   int    `json:"balance" binding:"required"`
}