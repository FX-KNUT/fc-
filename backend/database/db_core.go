package db

import (
	"database/sql"
	"log"
)

// CONSTANT VARIABLES

const CONST_DBMS_NAME__DRIVER string = "mysql"
const CONST_DBMS_NAME__SOURCE string = "something" // should be fixed right after I finish researching about DB logic relavant with Golang

func Init() {
	fn_open__db()
	fn_validate_blocks()
}

/*********************************************************************************/
/* <!----- fn_open__db *********************/

func fn_open__db() {

	db, err_db_open := sql.Open(CONST_DBMS_NAME__DRIVER, CONST_DBMS_NAME__SOURCE)

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