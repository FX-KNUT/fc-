package entity

type Message struct {
	Author     string `json:"author" binding:"required"`
	Message    string `json:"message" binding:"required"`
	Birth_date string `json:"birth_date" binding:"required"`
}