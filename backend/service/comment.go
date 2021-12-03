package service

import (
	"fmt"
	"log"
	"path/filepath"
	"time"

	db "github.com/FX-KNUT/fc-/backend/database"
	"github.com/FX-KNUT/fc-/backend/entity"
)


type Comment_Service interface {
	CreateComment(entity.Comment, string) error
	GetComments() ([]entity.Comment, string, error)
	UpdateComment(entity.Comment) error
	DeleteComment(entity.Comment) error
}

func fn_execute_comment_sql(q string, e entity.Comment) error {
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

// CREATE
func CreateComment(e entity.Comment, message_target string) error {
	// q := fmt.Sprintf(
	// 	`INSERT
	// 	 INTO comments (user_id, message_content, message_target, message_created_at)
	// 	 VALUES ('%s', '%s', '%s', '%s')`,
	// 	 e.Message_UserID, e.Message_Content, e.Message_Target, time.Now().Format("2006-01-02 15:04:05"),
	// )

	q := fmt.Sprintf(
		`INSERT
		 INTO comments (user_id, message_content, message_target, message_created_at)
		 VALUES ('%s', '%s', '%s', '%s')`,
		 e.Message_UserID, e.Message_Content, message_target, time.Now().Format("2006-01-02 15:04:05"),
	)

	err := fn_execute_comment_sql(q, e)
	return err
}

// UPDATE
func UpdateComment(e entity.Comment) error {
	q := fmt.Sprintf(
		`UPDATE comments
		 SET message_content='%s', message_updated_at='%s' WHERE message_id = %d`,
		 e.Message_Content, time.Now().Format("2006-01-02 15:04:05"), e.Message_ID,
	)

	err := fn_execute_comment_sql(q, e)
	return err
}

// DELETE
func DeleteComment(e entity.Comment) error {
	q := fmt.Sprintf("DELETE FROM comments WHERE message_id = %d", e.Message_ID)

	err := fn_execute_comment_sql(q, e)
	return err
}

// READ
// @이진형, 민경호
// 페이지 값을 넘겨받고 반영해야하므로 회의 필요.
func GetComments(message_target string) (es []entity.Comment, err error) {
	var e entity.Comment

	q := fmt.Sprintf(
		`SELECT * FROM comments
		 WHERE message_target='%s'
		 ORDER BY %d ASC
		 LIMIT %d`,
		message_target, e.Message_ID, 20,
	)

	db := db.Fn_open__db()

	rows, err := db.Query(q)
	defer rows.Close()
	if err != nil {
		fmt.Println(err)
	}

	for rows.Next() {
		err = rows.Scan(&e.Message_ID, &e.Message_UserID, &e.Message_Content, &e.Message_Target, &e.Message_CreatedAt, &e.Comment_LikeCount, &e.Comment_UpdatedAt)
		if err != nil {
			log.Panicln(err)
		}
		es = append(es, e)
	}

	return es, nil
	
}