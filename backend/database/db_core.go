package db

import (
	"database/sql"
	"fmt"
	"os"
	"time"

	_ "github.com/go-sql-driver/mysql" // mysql driver
)

var db *sql.DB

// CONSTANT VARIABLES

const CONST_DBMS_NAME__DRIVER string = os.Getenv("DBMS_NAME__DRIVER")
const CONST_DBMS_CONNECT_DB__USERID string = os.Getenv("DBMS_CONNECT_DB__USERID")
const CONST_DBMS_CONNECT_DB__USERPW string = os.Getenv("DBMS_CONNECT_DB__USERPW")
const CONST_DBMS_CONNECT_DB__METHOD string = os.Getenv("DBMS_CONNECT_DB__METHOD")
const CONST_DBMS_CONNECT_DB__IP string = os.Getenv("DBMS_CONNECT_DB__IP")
const CONST_DBMS_CONNECT_DB__PORT int = os.Getenv("DBMS_CONNECT_DB__PORT")
const CONST_DBMS_CONNECT_DB__CONTEXT string = os.Getenv("DBMS_CONNECT_DB__CONTEXT")

func Init() {
	fn_open__db()
	// fn_validate_blocks()
}

/*********************************************************************************/
/* <!----- fn_open__db *********************/

func fn_open__db() {

	db, err := sql.Open(CONST_DBMS_NAME__DRIVER, fmt.Sprintf(
		"%s:%s@%s(%s:%d)/%s",
		CONST_DBMS_CONNECT_DB__USERID,
		CONST_DBMS_CONNECT_DB__USERPW,
		CONST_DBMS_CONNECT_DB__METHOD,
		CONST_DBMS_CONNECT_DB__IP,
		CONST_DBMS_CONNECT_DB__PORT,
		CONST_DBMS_CONNECT_DB__CONTEXT,
	))

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
