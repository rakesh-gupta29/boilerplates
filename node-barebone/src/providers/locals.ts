import { Application } from "express";
import * as dotenv from "dotenv";
import * as path from "path";
import logger from "../middlewares/logger";

// load and inject the config in the express app
class Locals {
  // injecting env values in app locals
  public static initConfig(_application: Application): Application {
    logger.info("Loading Local Config");
    _application.locals.app = this.loadConfig();
    return _application;
  }
  public static loadConfig() {
    dotenv.config({ path: path.join(__dirname, "../../.env") }); //  direct to local env file
    const port = process.env.RUNTIME_PORT ?? 4000;
    const url = process.env.APP_URL || `http://localhost:${process.env.PORT}`;
    const isCORSEnabled = process.env.CORS_ENABLED || true;
    const apiPrefix = process.env.API_ROUTES_PREFIX || "api";

    return {
      port,
      url,
      isCORSEnabled,
      apiPrefix,
    };
  }
}

export default Locals;
