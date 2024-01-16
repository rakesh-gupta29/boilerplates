package router

import (
	"github.com/gofiber/fiber/v2"
)

func mountWebRoutes(app *fiber.App) {

	routes := app.Group("/")

	routes.Get("home", func(c *fiber.Ctx) error {
		return c.SendString("welcome to the homepage")
	})
}
