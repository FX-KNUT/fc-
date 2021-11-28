package service

import (
	"fmt"
	"log"
	"path/filepath"
	"time"

	db "github.com/FX-KNUT/fc-/backend/database"
	entity "github.com/FX-KNUT/fc-/backend/entity"
)

type Post entity.Post
type News entity.News

type struct_post_service struct {
	posts []Post
}

type Interface_post_service interface {
	CreatePost(entity.Post) error
	CreateNewsPost(News) error
	GetAllPostsinPage([]Post, error)
	GetAllPosts() ([]Post, error)
	GetAllNewsPosts() ([]News, error)
	GetBestAllNewsPosts() ([]News, error)
	GetPostsByTarget(string) ([]Post, error)
	GetNewsPostsByTarget(string) (News, error)
	GetLatestPostByTarget(string) (Post, error)
	GetLatestNewsPostByTarget(string) (News, error)
	UpdatePost(Post) error
	UpdateNewsPost(News) error
	DeletePost(Post) error
	DeleteNewsPost(News) error
	DeletePosts([]Post) error
	DeleteNewsPosts([]News) error
}


func (s *struct_post_service) CreatePost(p entity.Post) error {
	conn := db.Fn_access_db()

	q := fmt.Sprintf("INSERT INTO %s VALUES (%d, %d, '%s', '%s', %d, %d, %s)",
		p.Message_Target, p.Message_ID, p.Message_UserID, p.Post_Title, p.Message_Content, p.Post_ViewCount, p.Post_LikeCount, 
		time.Now().Format("2006-01-02 15:04:05"))
	
	result, err := conn.Exec(q)
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


// // func CreatePost(post Post) error {
// // 	conn := db.Fn_access_db()

// // 	q := "INSERT INTO post VALUES (%d, %d, '%s', '%s', '%s', '%s', '%s', %d, '%s', %d, %d)"
// // 	result, err := conn.Exec(q, post.Message_ID, post.Message_UserID, post.Message_Content, post.Message_Target, time.Now(), post.Post_BoardID, post.Post_Title, post.Post_ViewCount, post.Post_LikeCount)
// // 	if err != nil {
// // 		log.Panicln(err)
// // 	}

// // 	change_count, err := result.RowsAffected()
// // 	if err != nil {
// // 		log.Panicln(err)
// // 	}
// // 	log.Println("Change count: ", change_count)

// // 	return nil
// // }

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

// func UpdatePost(post Post) error { // Where 절 수정 필요할 수 있음. => Message 엔티티의 target과 Post 엔티티의 postid 분리
// 	conn := db.Fn_access_db()

// 	q := "UPDATE post SET message_content = '%s', message_target = '%s' message_updated_at = '%s', post_board_id = %d, post_title = '%s' WHERE message_id == %d"

// 	result, err := conn.Exec(q, post.Message_Content, post.Message_Target, time.Now(), post.Post_BoardID, post.Post_Title, post.Message_ID)

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

// func DeletePost(post Post) error { // 위와 같은 이유로 수정 필요할 수 있음.
// 	conn := db.Fn_access_db()

// 	q := "DELETE FROM post WHERE message_id = '%s'"

// 	result, err := conn.Exec(q, post.Message_ID)
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
