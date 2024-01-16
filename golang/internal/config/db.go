package config

import (
	"errors"
	"os"

	"github.com/rakesh-gupta29/server/internal/types"
)

var DBConfig types.DatabaseConfig

func loadDBConfig() error {
	url := os.Getenv("MONGO_URI")
	if url == "" {
		return errors.New("invalid database URL")
	}
	DBConfig.URL = url
	return nil
}
