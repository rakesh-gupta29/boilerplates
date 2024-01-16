import * as express from "express";
import logger from "./logger";
import Locals from "../providers/locals";

class HTTP {
  public static mount(_app: express.Application): express.Application {
    logger.info("Mouting the HTTP middlewares");
    _app.use(express.json()); // parse request body
    _app.disable("x-powered-by"); // tells what kind of server it is

    return _app;
  }
}
export default HTTP;
