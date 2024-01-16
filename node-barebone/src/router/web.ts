import { Router } from "express";
import HomeController from "../controllers/web/home";

const router: Router = Router();
router.get("/", HomeController.indexView);

export default router;
