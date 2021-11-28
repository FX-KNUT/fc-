module github.com/FX-KNUT/fc-/backend/service

go 1.17

require (
	github.com/FX-KNUT/fc-/backend/database v0.0.0-00010101000000-000000000000
	github.com/FX-KNUT/fc-/backend/entity v0.0.0-00010101000000-000000000000
)

require github.com/go-sql-driver/mysql v1.6.0 // indirect

replace github.com/FX-KNUT/fc-/backend/database => ../database

replace github.com/FX-KNUT/fc-/backend/entity => ../entity
