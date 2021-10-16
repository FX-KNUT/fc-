package db

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/go-sql-driver/mysql" // mysql driver
)

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

	db, err_db_open := sql.Open(CONST_DBMS_NAME__DRIVER, fmt.Sprintf(
			"%s:%s@%s(%s:%d)/%s",
			CONST_DBMS_CONNECT_DB__USERID,
			CONST_DBMS_CONNECT_DB__USERPW,
			CONST_DBMS_CONNECT_DB__METHOD,
			CONST_DBMS_CONNECT_DB__IP,
			CONST_DBMS_CONNECT_DB__PORT,
			CONST_DBMS_CONNECT_DB__CONTEXT,
		))

	// fn_set_db_config(db)

	if err_db_open != nil {
		log.Fatal(err_db_open)
	}

	// sql.Conn(ctx)

	// fn_begin_tx(ctx context.Context, opts *TxOptions)

	defer db.Close()

}

// func fn_set_db_config(db *sql.DB) {

// 	// simple examples of using library - sql
// 	db.SetConnMaxLifetime(time.Minute * 3)
// 	db.SetMaxOpenConns(10)
// 	db.SetMaxIdleConns(10)

// }

/* fn_open__db --> *************************/

/*********************************************************************************/
/* <!----- fn_validate_blocks ***************/

func fn_validate_blocks() {

}

/* fn_validate_blocks --> *******************/