import express from "express";

import citizenRoute from "./citizen.route.js";
import cityRoute from "./city.route.js";

const apiRouter = express.Router();

apiRouter.use("/citizen", citizenRoute);
apiRouter.use("/city", cityRoute);

apiRouter.get("/", (req, res) => {
  res.json("api");
});

export default apiRouter;
