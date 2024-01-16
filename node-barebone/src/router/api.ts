import { Router } from "express";
import ExchangeController from "../controllers/api/exhange";

const router: Router = Router();
router.get("/get100", ExchangeController.getTop100);

export default router;
