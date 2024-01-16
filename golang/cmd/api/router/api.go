package router

import (
	"github.com/gofiber/fiber/v2"
	"github.com/rakesh-gupta29/server/internal/handlers"
)

func MountAPIRoutes(app *fiber.App) {
	route := app.Group("/api/v1")
	route.Get("healthcheck", handlers.HealthCheck)
}
