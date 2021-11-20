package entity

import "github.com/jinzhu/gorm"

type Board struct {
	gorm.Model
	ID   uint   `gorm:"column:board_id"   json:"board_id"   binding:"require"`
	Name string `gorm:"column:board_name" json:"board_name" binding:"require"`
}
