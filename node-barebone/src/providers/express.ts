import * as express from "express";
import Middlewares from "../middlewares";
import logger from "../middlewares/logger";
import ExceptionHandler from "../middlewares/exceptionHandlers";
import Locals from "./locals";
import Routes from "./routes";

class Express {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.mountEnvConfig();
    this.mountMiddlewares();
    this.mountRoutes();
  }

  mountEnvConfig() {
    this.express = Locals.initConfig(this.express);
  }

  mountMiddlewares() {
    this.express = Middlewares.mountAll(this.express);
  }
  mountRoutes() {
    this.express = Routes.mountWebRoutes(this.express);
    this.express = Routes.mountAPIRoutes(this.express);
  }

  public createApp() {
    logger.info("creating the server");

    this.express.use(ExceptionHandler.clientErrorHandler);
    this.express.use(ExceptionHandler.globalErrorHandler);
    this.express = ExceptionHandler.routeNotFound(this.express);

    const port = Locals.loadConfig().port;
    this.express
      .listen(port, () => {
        return console.log(`SERVER :: Running @ 'http://localhost:${port}'`);
      })
      .on("error", (_error: Error) => {
        return console.log("Error: ", _error.message);
      });
  }
}

export default new Express();
