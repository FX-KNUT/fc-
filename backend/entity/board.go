package entity

type Writing struct {
	Author     string `json:"author" binding:"required"`
	Message    string `json:"message" binding:"required"`
	Birth_date string `json:"birth_date" binding:"required"`
}

type Comments []Writing

type Board struct {
	Index   int
	Writing Writing
	Comment Comments
}