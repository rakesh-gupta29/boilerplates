package types

import "time"

type Tool struct {
	ID          string
	Title       string
	Image       string
	Tag         string
	Description string
	URL         string
}

type DatabaseConfig struct {
	URL string
}

type ApplicationConfig struct {
	Host        string
	Port        string
	DebugMode   bool
	ReadTimeout time.Duration
}
