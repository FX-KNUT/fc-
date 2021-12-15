module github.com/FX-KNUT/fc-/backend/server

go 1.17

replace github.com/FX-KNUT/fc-/backend/server/logic => ./logic

replace github.com/FX-KNUT/fc-/backend/server/logic/fx_framework => ./logic/fx_framework

replace github.com/FX-KNUT/fc-/backend/service => ../service

replace github.com/FX-KNUT/fc-/backend/entity => ../entity

replace github.com/FX-KNUT/fc-/backend/cache => ./cache

require github.com/FX-KNUT/fc-/backend/server/logic v0.0.0-00010101000000-000000000000

require (
	github.com/FX-KNUT/fc-/backend/database v0.0.0-20211203113829-82e7270bfa7c // indirect
	github.com/FX-KNUT/fc-/backend/server/logic/fx_framework v0.0.0-20211204133004-ebbd08fbd9f2 // indirect
	github.com/go-sql-driver/mysql v1.6.0 // indirect
)
