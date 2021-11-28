-- USER

-- @신이종
-- USER 테이블: 필요한 필드 추가 기재.
-- 그 외 테이블 생성 SQL 작성.

CREATE TABLE user (
  id VARCHAR(15),
  nickname VARCHAR(12),
  hashed_pw VARCHAR(36),
  email VARCHAR(48),
  balance INT,
  primary key(id)
);


-- MESSAGE
-- -- POSTs
-- -- NEWS_THUMBNAILs
-- -- COMMMENTs
-- -- REPORTs

-- @이진형
-- MESSAGE 테이블을 생성하고 POST 테이블과 조인하는 방법에 대해서 상의 후 결정.
-- 테이블 필드 이름 앞에 엔티티명을 붙이는 것에 대해서 상의 후 결정.

CREATE TABLE posts (
  message_id INT(20),
  message_user_id INT(20),
  message_content VARCHAR(500),
  message_target VARCHAR(30),
  message_created_at TIMESTAMP,
  post_title VARCHAR(30),
  post_view_count INT(3),
  post_like_count INT(3),
  post_updated_at TIMESTAMP,
  PRIMARY KEY(message_id)
);

CREATE TABLE news_thumbnails (
  message_id INT(20),
  news_thumbnail VARCHAR(100),
  PRIMARY KEY(message_id)
);

CREATE TABLE comments (
  message_id INT(20),
  message_user_id INT(20),
  message_content VARCHAR(500),
  message_target VARCHAR(30),
  message_created_at TIMESTAMP,
  comment_like_count INT(3),
  comment_updated_at TIMESTAMP,
  PRIMARY KEY(message_id)
);

CREATE TABLE board (

);

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