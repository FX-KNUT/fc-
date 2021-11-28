module github.com/FX-KNUT/fc-/backend/api

go 1.17

require (
	github.com/FX-KNUT/fc-/backend/controller/block v0.0.0-00010101000000-000000000000
	github.com/FX-KNUT/fc-/backend/controller/message v0.0.0-00010101000000-000000000000
	github.com/FX-KNUT/fc-/backend/controller/user v0.0.0-00010101000000-000000000000
	github.com/FX-KNUT/fc-/backend/entity v0.0.0-00010101000000-000000000000
	github.com/FX-KNUT/fc-/backend/service v0.0.0-00010101000000-000000000000
	github.com/gin-gonic/gin v1.7.7
)

require (
	github.com/FX-KNUT/fc-/backend/controller/logic v0.0.0-00010101000000-000000000000 // indirect
	github.com/FX-KNUT/fc-/backend/database v0.0.0-20211126145401-28d087d7aa69 // indirect
	github.com/gin-contrib/sse v0.1.0 // indirect
	github.com/go-playground/locales v0.13.0 // indirect
	github.com/go-playground/universal-translator v0.17.0 // indirect
	github.com/go-playground/validator/v10 v10.4.1 // indirect
	github.com/go-sql-driver/mysql v1.6.0 // indirect
	github.com/golang/protobuf v1.3.3 // indirect
	github.com/json-iterator/go v1.1.9 // indirect
	github.com/leodido/go-urn v1.2.0 // indirect
	github.com/mattn/go-isatty v0.0.12 // indirect
	github.com/modern-go/concurrent v0.0.0-20180228061459-e0a39a4cb421 // indirect
	github.com/modern-go/reflect2 v0.0.0-20180701023420-4b7aa43c6742 // indirect
	github.com/ugorji/go/codec v1.1.7 // indirect
	golang.org/x/crypto v0.0.0-20211108221036-ceb1ce70b4fa // indirect
	golang.org/x/sys v0.0.0-20210615035016-665e8c7367d1 // indirect
	gopkg.in/yaml.v2 v2.2.8 // indirect
)

replace github.com/FX-KNUT/fc-/backend/controller/user => ../controller/user

replace github.com/FX-KNUT/fc-/backend/entity => ../entity

replace github.com/FX-KNUT/fc-/backend/service => ../service

replace github.com/FX-KNUT/fc-/backend/database => ../database

replace github.com/FX-KNUT/fc-/backend/controller/logic => ../controller/logic

replace github.com/FX-KNUT/fc-/backend/controller/message => ../controller/message

replace github.com/FX-KNUT/fc-/backend/controller/block => ../controller/block
