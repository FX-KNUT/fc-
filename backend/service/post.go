package service

import (
	"fmt"
	"log"
	"path/filepath"
	"time"

	db "github.com/FX-KNUT/fc-/backend/database"
	entity "github.com/FX-KNUT/fc-/backend/entity"
)

// Interface
type Interface_post_service interface {
	CreatePost(entity.Post, string) error
	CreateNewsPost(entity.News) error
	GetAllPostsinPage([]entity.Post, error)
	GetPosts(string) ([]entity.Post, error)
	GetAllNewsPosts() ([]entity.News, error)
	GetBestAllNewsPosts() ([]entity.News, error)
	GetPostsByTarget(string) ([]entity.Post, error)
	GetNewsPostsByTarget(string) (entity.News, error)
	GetLatestPostByTarget(string) (entity.Post, error)
	GetLatestNewsPostByTarget(string) (entity.News, error)
	UpdatePost(entity.Post) error
	UpdateNewsPost(entity.News) error
	DeletePost(entity.Post) error
	DeleteNewsPost(entity.News) error
	DeletePosts([]entity.Post) error
	DeleteNewsPosts([]entity.News) error
}


// METHODS
func fn_execute__post_sql(q string, e entity.Post) error {
	db := db.Fn_open__db()

	result, err := db.Exec(q)
	if err != nil {
		dir,_ := filepath.Abs("post.go")
		log.Panicf("Error: %s/CreatePost\n:%v", dir, err)
	}

	change_count, err := result.RowsAffected()
	if err != nil {
		log.Panicln(err)
	}
	log.Println("Change count: ", change_count)

	return nil
}

// CREATE: 게시물 생성
func CreatePost(e entity.Post, board string) error {
	// q := fmt.Sprintf(
	// 	`INSERT INTO posts (user_id, message_content, message_target, message_created_at, post_title)
	// 	 VALUES ('%s', '%s', '%s', '%s', '%s')`,
	// 	e.Message_UserID, e.Message_Content, e.Message_Target, time.Now().Format("2006-01-02 15:04:05"), e.Post_Title,
	// )

	q := fmt.Sprintf(
		`INSERT
		 INTO posts (user_id, message_content, message_target, message_created_at, post_title)
		 VALUES ('%s', '%s', '%s', '%s', '%s')`,
		e.User_ID, e.Message_Content, board, time.Now().Format("2006-01-02 15:04:05"), e.Post_Title,
	)
	
	err := fn_execute__post_sql(q, e)
	return err
}

func CreateNewsPost(e entity.News) error {
	db := db.Fn_open__db()

	q := fmt.Sprintf(
		`INSERT
		 INTO posts (message_user_id, message_content, message_target, message_created_at, post_title)
		 VALUES ('%s', '%s', '%s', '%s', '%s')
		 INTO news_thumbnails (news_thumbnail)
		 VALUES ('%s')`,
		e.User_ID, e.Message_Content, e.Message_Target, time.Now().Format("2006-01-02 15:04:05"), e.Post_Title,
		e.News_Thumbnail,
	)
	
	result, err := db.Exec(q)
	if err != nil {
		dir,_ := filepath.Abs("post.go")
		log.Panicf("Error: %s/CreatePost\n:%v", dir, err)
	}

	change_count, err := result.RowsAffected()
	if err != nil {
		log.Panicln(err)
	}
	log.Println("Change count: ", change_count)

	return nil
}

// UPDATE: 게시물 수정
func UpdatePost(e entity.Post) error {
	q := fmt.Sprintf(
		`UPDATE posts
		 SET post_title='%s', message_content='%s', message_updated_at='%s' WHERE message_id = %d`,
		 e.Post_Title, e.Message_Content, e.Post_UpdatedAt, e.Message_ID,
	)

	err := fn_execute__post_sql(q, e)
	return err
}

func UpdateNewsPost(e entity.News) error {
	db := db.Fn_open__db()

	q := fmt.Sprintf(
		`UPDATE posts p
		 RIGHT JOIN news_thumbnails nt
		 ON (p.message_id = nt.message_id)
		 SET p.post_title='%s', p.message_content='%s', p.message_updated_at='%s' nt.news_thumbnail='%s' WHERE p.message_id = %d`,
		 e.Post_Title, e.Message_Content, e.Post_UpdatedAt, e.News_Thumbnail, e.Message_ID,
	)

	result, err := db.Exec(q)
	if err != nil {
		log.Panic(err)
		return err
	}

	change_count, err := result.RowsAffected()
	if err != nil {
		log.Panic(err)
		return err
	}
	log.Println("change count: ", change_count)

	return nil
}

// DELETE: 게시물 삭제
func DeletePost(e entity.Post) error { // 위와 같은 이유로 수정 필요할 수 있음.
	q := fmt.Sprintf("DELETE FROM posts WHERE message_id = %d", e.Message_ID)

	err := fn_execute__post_sql(q, e)
	return err
}

// READ: 게시물 불러오기
func GetPosts(message_target string) (es []entity.Post, err error) {
	var e entity.Post

	q := fmt.Sprintf(
		`SELECT * FROM posts
		 WHERE message_target='%s'
		 ORDER BY %d
		 LIMIT %d`,
		message_target, e.Message_ID, 20,
	)

	db := db.Fn_open__db()

	rows, err := db.Query(q)
	if err != nil {
		log.Panic(err)
	}
	defer rows.Close()

	for rows.Next() {
		err = rows.Scan(&e.Message_ID, &e.User_ID, &e.Message_Content, &e.Message_Target, &e.Message_CreatedAt,
			&e.Post_Title, &e.Post_ViewCount, &e.Post_LikeCount, &e.Post_UpdatedAt)
		if err != nil {
			log.Panicln(err)
		}
		es = append(es, e)
	}
	return es, nil
}

// func DeletePosts(e []entity.Post) error {
// 	q := fmt.Sprintf(
// 		`DELETE FROM posts WHERE `,
// 	)
// }

	// CREATE TABLE post (
	// 	message_id INT(20),
	// 	message_user_id VARCHAR(15),
	// 	message_content VARCHAR(500),
	// 	message_target VARCHAR(30),
	// 	message_created_at TIMESTAMP,
	// 	post_title VARCHAR(30),
	// 	post_view_count INT(3),
	// 	post_like_count INT(3),
	// 	post_updated_at TIMESTAMP,
	// 	PRIMARY KEY(message_id),
	// 	FORIEGN KEY(message_user_id) REFERENCES user (id)
	// );



// func CreateNewsPost(news entity.News) error {
// 	conn := db.Fn_access_db()

// 	q := "INSERT INTO newspost VALUES (%d, %d, '%s', '%s', '%s', '%s', '%s', %d, '%s', %d, %d, '%s')"
// 	result, err := conn.Exec(q, news.Message_ID, news.Message_UserID, news.Message_Content, news.Message_Target, time.Now(),
// 		news.Post_BoardID, news.Post_Title, news.Post_ViewCount, news.Post_LikeCount, news.News_Thumbnail)
// 	if err != nil {
// 		log.Panicln(err)
// 	}

// 	change_count, err := result.RowsAffected()
// 	if err != nil {
// 		log.Panicln(err)
// 	}
// 	log.Println("Change count: ", change_count)

// 	return nil
// }

// func GetAllPosts() (posts []Post, e error) {
// 	var post Post

// 	conn := db.Fn_access_db()

// 	q := "SELECT * FROM post"
// 	rows, err := conn.Query(q)
// 	defer rows.Close()
// 	if err != nil {
// 		log.Panic(err)
// 	}

// 	for rows.Next() {
// 		err = rows.Scan(&post.Message_ID, &post.Message_UserID, &post.Message_Content, &post.Message_Target, &post.Message_CreatedAt,
// 			&post.Message_UpdatedAt, &post.Message_DeletedAt, &post.Post_BoardID, &post.Post_Title, &post.Post_ViewCount, &post.Post_LikeCount)
// 		if err != nil {
// 			log.Panicln(err)
// 		}
// 		posts = append(posts, post)
// 	}

// 	return posts, nil
// }

// func GetAllNewsPosts() (news_posts []News, e error) {
// 	var news News

// 	conn := db.Fn_access_db()

// 	q := "SELECT * FROM news"
// 	rows, err := conn.Query(q)
// 	defer rows.Close()
// 	if err != nil {
// 		log.Panic(err)
// 	}

// 	for rows.Next() {
// 		err = rows.Scan(&news.Message_ID, &news.Message_UserID, &news.Message_Content, &news.Message_Target, &news.Message_CreatedAt,
// 			&news.Message_UpdatedAt, &news.Message_DeletedAt, &news.Post_BoardID, &news.Post_Title, &news.Post_ViewCount, &news.Post_LikeCount,
// 			&news.News_Thumbnail)
// 		if err != nil {
// 			log.Panicln(err)
// 		}
// 		news_posts = append(news_posts, news)
// 	}

// 	return news_posts, nil
// }

// func GetAllBestNewsPosts() (news_posts []News, e error) {
// 	var news News

// 	conn := db.Fn_access_db()

// 	q := "SELECT * FROM news ORDER BY post_view_count limit 10"
// 	rows, err := conn.Query(q)
// 	defer rows.Close()
// 	if err != nil {
// 		log.Panic(err)
// 	}

// 	for rows.Next() {
// 		err = rows.Scan(&news.Message_ID, &news.Message_UserID, &news.Message_Content, &news.Message_Target, &news.Message_CreatedAt,
// 			&news.Message_UpdatedAt, &news.Message_DeletedAt, &news.Post_BoardID, &news.Post_Title, &news.Post_ViewCount, &news.Post_LikeCount,
// 			&news.News_Thumbnail)
// 		if err != nil {
// 			log.Panicln(err)
// 		}
// 		news_posts = append(news_posts, news)
// 	}

// 	return news_posts, nil
// }

// func GetPostsByTarget(target string) (posts []Post, e error) {
// 	var post Post

// 	conn := db.Fn_access_db()

// 	q := "SELECT * FROM post WEHRE message_target = '%s'"
// 	rows, err := conn.Query(q, target)
// 	defer rows.Close()
// 	if err != nil {
// 		log.Panic(err)
// 	}

// 	for rows.Next() {
// 		err = rows.Scan(&post.Message_ID, &post.Message_UserID, &post.Message_Content, &post.Message_Target, &post.Message_CreatedAt,
// 			&post.Message_UpdatedAt, &post.Message_DeletedAt, &post.Post_BoardID, &post.Post_Title, &post.Post_ViewCount, &post.Post_LikeCount)
// 		if err != nil {
// 			log.Panicln(err)
// 		}
// 		posts = append(posts, post)
// 	}

// 	return posts, nil
// }

// func GetNewsPostsByTarget(target string) (news_posts []News, e error) {
// 	var news News

// 	conn := db.Fn_access_db()

// 	q := "SELECT * FROM news WEHRE message_target = '%s'"
// 	rows, err := conn.Query(q, target)
// 	defer rows.Close()
// 	if err != nil {
// 		log.Panic(err)
// 	}

// 	for rows.Next() {
// 		err = rows.Scan(&news.Message_ID, &news.Message_UserID, &news.Message_Content, &news.Message_Target, &news.Message_CreatedAt,
// 			&news.Message_UpdatedAt, &news.Message_DeletedAt, &news.Post_BoardID, &news.Post_Title, &news.Post_ViewCount, &news.Post_LikeCount,
// 			&news.News_Thumbnail)
// 		if err != nil {
// 			log.Panicln(err)
// 		}
// 		news_posts = append(news_posts, news)
// 	}

// 	return news_posts, nil
// }

// func GetLatestPostByTarget(target string) (post Post, e error) {
// 	conn := db.Fn_access_db()

// 	q := "SELECT * FROM BLOCK post BY msg_id desc limit 1"

// 	err := conn.QueryRow(q).Scan(&post)

// 	if err != nil {
// 		log.Panicln(err)
// 		return Post{}, err
// 	}

// 	return post, nil
// }

// func GetLatestNewsPostByTarget(target string) (news News, e error) {
// 	conn := db.Fn_access_db()

// 	q := "SELECT * FROM BLOCK news BY msg_id desc limit 1"

// 	err := conn.QueryRow(q).Scan(&news)

// 	if err != nil {
// 		log.Panicln(err)
// 		return News{}, err
// 	}

// 	return news, nil
// }

// func UpdateNewsPost(news News) error { // Where 절 수정 필요할 수 있음. => Message 엔티티의 target과 Post 엔티티의 postid 분리
// 	conn := db.Fn_access_db()

// 	q := "UPDATE news SET message_content = '%s', message_target = '%s' message_updated_at = '%s', post_board_id = %d, post_title = '%s' news_thumbnail = '%s' WHERE message_id == %d"

// 	result, err := conn.Exec(q, news.Message_Content, news.Message_Target, time.Now(), news.Post_BoardID, news.Post_Title,
// 		news.News_Thumbnail, news.Message_ID)
// 	if err != nil {
// 		log.Panic(err)
// 		return err
// 	}

// 	change_count, err := result.RowsAffected()
// 	if err != nil {
// 		log.Panic(err)
// 		return err
// 	}
// 	log.Println("change count: ", change_count)

// 	return nil
// }

// func DeleteNewsPost(news News) error { // 위와 같은 이유로 수정 필요할 수 있음.
// 	conn := db.Fn_access_db()

// 	q := "DELETE FROM post WHERE message_id = '%s'"

// 	result, err := conn.Exec(q, news.Message_ID)
// 	if err != nil {
// 		log.Panic(err)
// 		return err
// 	}

// 	change_count, err := result.RowsAffected()
// 	if err != nil {
// 		log.Panic(err)
// 		return err
// 	}
// 	log.Println("change count: ", change_count)

// 	return nil
// }

// func DeletePosts(posts []Post) error
// func DeleteNewsPosts(posts []News) error
