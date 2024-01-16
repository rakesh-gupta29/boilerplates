package router

import "github.com/gofiber/fiber/v2"

func MountAllRoutes(app *fiber.App) {
	app.Static("/", "../../client")
	mountWebRoutes(app)
	MountAPIRoutes(app)
	mountPrivateRoutes(app)
	NotFoundRoute(app)
}

func NotFoundRoute(a *fiber.App) {
	a.Use(
		func(c *fiber.Ctx) error {
			return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
				"msg": "Requested resource could not be found.",
			})
		},
	)
}
