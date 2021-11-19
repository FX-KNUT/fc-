package entity

type Comment struct {
	Message
	CommentId        int `gorm:"column:comment_id"         json:"comment_id"         binding:"require"`
	CommentLikeCount int `gorm:"column:comment_like_count" json:"comment_like_count" binding:"require"`
}
