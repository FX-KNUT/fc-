module github.com/FX-KNUT/fc-/backend/database

go 1.17

require (
	github.com/FX-KNUT/fc-/backend/entity v0.0.0-00010101000000-000000000000
	github.com/go-sql-driver/mysql v1.6.0
	github.com/joho/godotenv v1.4.0
)

replace github.com/FX-KNUT/fc-/backend/entity => ../entity
