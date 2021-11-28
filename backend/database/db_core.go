package db

import (
	"database/sql"
	"fmt"
	"os"

	_ "github.com/go-sql-driver/mysql" // mysql driver
)

func Fn_open__db() *sql.DB {

	sql_driver := os.Getenv("DBMS_NAME__DRIVER")

	DSN := fmt.Sprintf("%s:%s@%s(%s:%s)/%s", 
		os.Getenv("DBMS_CONNECT_DB__USERID"),
		os.Getenv("DBMS_CONNECT_DB__USERPW"),
		os.Getenv("DBMS_CONNECT_DB__METHOD"),
		os.Getenv("DBMS_CONNECT_DB__IP"),
		os.Getenv("DBMS_CONNECT_DB__PORT"),
		os.Getenv("DBMS_CONNECT_DB__CONTEXT"),
	)

	db, err := sql.Open(sql_driver, DSN)

	if err != nil {
		fmt.Printf("Error occurred while opening DB, error - %s", err)
		os.Exit(1)
	}

	return db

}

// func fn_set_db_config(db *sql.DB) {

// 	// simple examples of using library - sql
// 	db.SetConnMaxLifetime(time.Minute * 3)
// 	db.SetConnMaxIdleTime(10)
// 	db.SetMaxOpenConns(10)
// 	db.SetMaxIdleConns(10)

// }

func Fn_close_db(close_db chan<- bool) {

	var db *sql.DB
	
	err := db.Close()
	if err != nil {
		close_db <- false
		return
	}
	close_db <- true
}

/* fn_open__db --> *************************/

/*********************************************************************************/
/* <!----- fn_validate_blocks ***************/

// func fn_validate_blocks() {

// }

/* fn_validate_blocks --> *******************/
