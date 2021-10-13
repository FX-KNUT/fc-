package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"time"

	"./api"
)

// CONSTANT VARIABLES
const CONST_NUMBER_PORT int = 8096
const CONST_DBMS_NAME__DRIVER string = "mysql"
const CONST_DBMS_NAME__SOURCE string = "something" // should be fixed right after I finish researching about DB logic relavant with Golang

func main() {
	fn_init()
}

func fn_init() {
	fn_open__db()
	fn_open__main_server()
	fn_open__api()
}

/*********************************************************************************/
/* <!----- fn_open__db *********************/

func fn_open__db() {
	
	db, err_db_open := sql.Open(CONST_DBMS_NAME__DRIVER, CONST_DBMS_NAME__SOURCE)

	fn_set_db_config(db) 

	if err_db_open != nil {
		log.Fatal(err_db_open)
	}

	defer db.Close()
	
}

func fn_set_db_config(db *sql.DB) {

	// simple examples of using library - sql
	db.SetConnMaxLifetime(time.Minute * 3)
	db.SetMaxOpenConns(10)
	db.SetMaxIdleConns(10)

} 

/* fn_open__db --> *************************/

/*********************************************************************************/
/* <!----- fn_open__main_server ****************/

func fn_open__main_server() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Main Server Is Responding."))
	})

	if err_serving_http := http.ListenAndServe(fmt.Sprintf(":%d", CONST_NUMBER_PORT), nil); err_serving_http != nil {
		log.Fatal(err_serving_http)
	}

	// function which has a logic of closing main server needed
}

/* fn_open__main_server --> ********************/

/*********************************************************************************/
/* <!----- fn_open__api ************************/

func fn_open__api() {
	api.Get()
	api.Post()
}

/* fn_open__api ----------> ********************/