package controller

import (
	"fmt"

	db "../database"
)

func fn_check_duplicate_ID(id string) (string, error) {
	database := db.Fn_access_db()
	query := fmt.Sprintf("SELECT ID FROM USER WHERE ID = %s;", id)
	get_id, err := database.Query(query)

	fmt.Println(get_id)

	return "TESTING", err
} 	