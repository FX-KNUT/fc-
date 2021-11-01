package db

import (
	"database/sql"
	"fmt"
	"time"

	_ "github.com/go-sql-driver/mysql" // mysql driver
)

var db *sql.DB

// CONSTANT VARIABLES

const CONST_DBMS_NAME__DRIVER string = "mysql"
const CONST_DBMS_CONNECT_DB__USERID string = "root"
const CONST_DBMS_CONNECT_DB__USERPW string = "tlsdlwhd123."
const CONST_DBMS_CONNECT_DB__METHOD string = "tcp"
const CONST_DBMS_CONNECT_DB__IP string = "127.0.0.1"
const CONST_DBMS_CONNECT_DB__PORT int = 3310
const CONST_DBMS_CONNECT_DB__CONTEXT string = "fc"

func Init() {
	fn_open__db()
	fn_validate_blocks()
}

/*********************************************************************************/
/* <!----- fn_open__db *********************/

func fn_open__db() {

	db, _ = sql.Open(CONST_DBMS_NAME__DRIVER, fmt.Sprintf(
			"%s:%s@%s(%s:%d)/%s",
			CONST_DBMS_CONNECT_DB__USERID,
			CONST_DBMS_CONNECT_DB__USERPW,
			CONST_DBMS_CONNECT_DB__METHOD,
			CONST_DBMS_CONNECT_DB__IP,
			CONST_DBMS_CONNECT_DB__PORT,
			CONST_DBMS_CONNECT_DB__CONTEXT,
		))

	fn_set_db_config(db)

	// insert, err := db.Query("INSERT INTO table_name VALUES('some_field_name')") // returns *sql.Rows, error
	// defer insert.Close()


	// sql.Conn(ctx)

	// fn_begin_tx(ctx context.Context, opts *TxOptions)

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

func fn_validate_blocks() {

}

/* fn_validate_blocks --> *******************/