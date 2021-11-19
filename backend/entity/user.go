package entity

type User struct {
	Id        string `json:"id" binding:"required"`
	Nickname  string `json:"nickname" binding:"required"`
	Hashed_pw string `json:"hashed_pw" binding:"required"`
	Email     string `json:"email" binding:"required"`
	Balance   int    `json:"balance"`
}

type Users []User
