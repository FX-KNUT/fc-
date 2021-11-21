package entity

type Board struct {
	Board_ID   uint64 `gorm:"column:board_id"   json:"board_id"   binding:"require"`
	Board_Name string `gorm:"column:board_name" json:"board_name" binding:"require"`
}
