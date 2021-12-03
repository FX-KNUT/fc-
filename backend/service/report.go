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
	GetReports() ([]entity.Report, error)
}

func (s *struct_report_service) CreateReport(e entity.Report) error {
	
	db := db.Fn_open__db()

	q := fmt.Sprintf("INSERT INTO report VALUES (%d, '%s', '%s', '%s')",
		e.Message_ID, e.Message_UserID, e.Message_Target, time.Now().Format("2006-01-02 15:04:05"))
	
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