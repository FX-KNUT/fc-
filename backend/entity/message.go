package entity

import (
	"github.com/jinzhu/gorm"
)

type Message struct {
	gorm.Model
	UserId  int    `gorm:"column:user_id" json:"post_id" binding:"require"`
	Content string `gorm:"column:content" json:"content" binding:"require"`
	Target  int    `gorm:"column:target"  json:"target"  binding:"require"`
}
