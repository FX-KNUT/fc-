package entity

import "time"

type Message struct {
	Message_ID        uint      `json:"message_id"`
	Message_UserID    uint      `json:"message_user_id" binding:"require"`
	Message_Content   string    `json:"message_content" binding:"require"`
	Message_Target    string    `json:"message_target"  binding:"require"`
	Message_CreatedAt time.Time `json:"message_created_at"`
}

type Post struct { // 공지사항, FAQ, QnA, 커뮤니티
	Message
	Post_Title     string    `json:"post_title" 		 binding:"require"`
	Post_ViewCount uint      `json:"post_view_count" binding:"require"`
	Post_LikeCount uint      `json:"post_like_count" binding:"require"`
	Post_UpdatedAt time.Time `json:"post_updated_at"`
}

type News struct { // 뉴스 (JOIN: Post + NewsPostThumbnail)
	Post
	News_Thumbnail string `json:"news_thumbnail"`
}

type Comment struct { // 댓글
	Message
	Comment_LikeCount uint `json:"comment_like_count" binding:"require"`
	Comment_UpdatedAt time.Time `json:"comment_updated_at"`
}

type Report struct { // 신고
	Message
	Report_Reason uint `json:"report_reason" binding:"require"`
}

/*
 * # 게시판 번호
 * =============
 * 0: 공지사항
 * 1: FAQ
 * 2: QnA
 * 3: 커뮤니티
 * 4: 뉴스
 * =============
 */

/*
 * # Entity: Report
 * ===============================
 * 식별자   : 리포트 식별자
 * 신고자   : 사용자
 * 내용     : 신고자 메세지
 * 대상     : POST_ID, COMMENT_ID
 * 이유     : 셀렉트바
 * 신고 시각: 제출 시각
 * ===============================
 */