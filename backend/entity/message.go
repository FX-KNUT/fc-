package entity

import "time"

type Message struct {
	Image      string    `json:"image"`
	Author     string    `json:"author" binding:"required"`
	Content    string    `json:"content" binding:"required"`
	Created_at time.Time `json:"created_at" binding:"required"`
}
