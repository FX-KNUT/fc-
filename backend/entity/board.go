package entity

type Board struct {
	Board_ID   uint64 `json:"board_id"   binding:"require"`
	Board_Name string `json:"board_name" binding:"require"`
}
