package service

import (
	"fmt"
	"log"
	"path/filepath"
	"time"

	db "github.com/FX-KNUT/fc-/backend/database"
	"github.com/FX-KNUT/fc-/backend/entity"
)

type struct_report_service struct {
	report []entity.Report
}

type Interface_report_service interface {
	CreateReport(entity.Report) error
	GetReports(string) ([]entity.Report, error)
}

func (s *struct_report_service) CreateReport(e entity.Report) error {
	
	db := db.Fn_open__db()

	q := fmt.Sprintf("INSERT INTO report VALUES (%d, '%s', '%s', '%s')",
		e.Message_ID, e.User_ID, e.Message_Target, time.Now().Format("2006-01-02 15:04:05"))
	
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

func GetReports(message_target string) (es []entity.Report, err error) {
	var e entity.Report

	q := fmt.Sprintf(
		`SELECT * FROM reports
		 WHERE message_target='%s'
		 ORDER BY %d DESC`,
		 message_target, e.Message_ID,
	)

	db := db.Fn_open__db()

	rows, err := db.Query(q)
	if err != nil {
		log.Panic(err)
	}
	defer rows.Close()

	for rows.Next() {
		err = rows.Scan(&e.Message_ID, &e.User_ID, &e.Message_Content, &e.Message_Target, &e.Message_CreatedAt,
			&e.Report_Reason)
		if err != nil {
			log.Panicln(err)
		}
		es = append(es, e)
	}

	return es, nil
}