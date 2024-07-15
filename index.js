import "dotenv/config";

import express from "express";
import { router } from "./src/routers/index.js";

const app = express();

app.use(router);

app.listen(process.env.PORT, () => {
  console.log("server launched");
});
