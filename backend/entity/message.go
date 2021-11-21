package entity

import "time"

type Message struct {
	Message_ID        uint64    `json:"message_id"`
	Message_UserID    uint64    `json:"message_user_id" binding:"require"`
	Message_Content   string    `json:"message_content" binding:"require"`
	Message_Target    string    `json:"message_target"  binding:"require"`
	Message_CreatedAt time.Time `json:"message_created_at"`
	Message_UpdatedAt time.Time `json:"message_updated_at"`
	Message_DeletedAt time.Time `json:"message_deleted_at"`
}

type Post struct { // 공지사항, FAQ, QnA, 커뮤니티
	Message
	Post_BoardID   uint64 `json:"post_board_id"   binding:"require"`
	Post_Title     string `json:"post_title" 		 	binding:"require"`
	Post_ViewCount uint64 `json:"post_view_count" binding:"require"`
	Post_LikeCount uint64 `json:"post_like_count" binding:"require"`
}

type News struct { // 뉴스
	Post
	News_Thumbnail string `json:"news_thumbnail"`
}

type Comment struct {
	Message
	Comment_ID        uint64 `json:"comment_id"         binding:"require"`
	Comment_LikeCount uint64 `json:"comment_like_count" binding:"require"`
}
