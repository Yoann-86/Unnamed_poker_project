import { Router } from "express";
import { dashboardController } from "../controllers/dashboardController.js";

const router = Router();

// router.use("/dashboard", dashboardController);

router.use("/dashboard/addcase", dashboardController);

export { router };
