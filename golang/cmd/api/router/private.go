package router

import (
	"github.com/gofiber/fiber/v2"
	"github.com/rakesh-gupta29/server/internal/handlers"
)

func mountPrivateRoutes(app *fiber.App) {
	route := app.Group("/private")

	route.Get("admin", handlers.GetAdminProfile)
}
