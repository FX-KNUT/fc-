package db

import (
	"database/sql"
	"fmt"
	"os"
	"time"

	_ "github.com/go-sql-driver/mysql" // mysql driver
)

var db *sql.DB

func Init() {
	fn_open__db()
	// fn_validate_blocks()
}

func fn_open__db() {

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

	fmt.Println(sql_driver, DSN)

	if err != nil {
		fmt.Printf("Error occurred while opening DB, error - %s", err)
		os.Exit(1)
	}

	fn_set_db_config(db)

	fmt.Println("DB is successfully opened. // backend/database/db_core.go")
}

func fn_set_db_config(db *sql.DB) {

	// simple examples of using library - sql
	db.SetConnMaxLifetime(time.Minute * 3)
	db.SetConnMaxIdleTime(10)
	db.SetMaxOpenConns(10)
	db.SetMaxIdleConns(10)

}

func Fn_access_db() *sql.DB {
	return db
}

func Fn_close_db(close_db chan<- bool) {
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
