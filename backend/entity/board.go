package entity

import "time"

type Board []Post

type Board struct {
	Index int    `json:"index"`
	Title string `json:"title" binding:"require"`
}

type News struct {
	Board
	Image   string `json:"image"`
	Author  string `json:"author" binding:"require"`
	Company string `json:"company" binding:"require"`
}

type Notice Board

type FAQ Board

type QnA Board

type Community struct {
	Board
	Author string `json:"image" binding:"require"`
	// Grade     int       `json:"grade" binding:"require"`
	Created_at time.Time `json:"created_at" binding:"require"`
	Updated_at time.Time `json:"updated_at" binding:"require"`
}
