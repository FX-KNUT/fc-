package entity

type Post struct { // 공지사항, FAQ, QnA, 커뮤니티
	Message
	BoardId       int    `gorm:"column:board_id"   		  json:"board_id"   		 binding:"require"`
	Title         string `gorm:"column:title" 		 			json:"title" 		 			 binding:"require"`
	ViewCount     int    `gorm:"column:view_count" 		  json:"view_count" 		 binding:"require"`
	PostLikeCount int    `gorm:"column:post_like_count" json:"post_like_count" binding:"require"`
}

type News struct { // 뉴스
	Post
	Thumbnail string `gorm:"column:thumbnail" json:"thumbnail"`
}
