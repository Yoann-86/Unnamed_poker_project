import { Router } from "express";
import { router as loggedRouter } from "./loggedRouter.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Unnamed poker project !");
});

router.use("/:gamertag", loggedRouter);

export { router };
