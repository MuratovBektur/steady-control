import express from "express";
import citizenController from "../controllers/citizen.controller.js";

const citizenRoute = express.Router();

citizenRoute.get("/", (req, res) => {
  res.json("citizenRoute");
});
citizenRoute.get("/all", citizenController.getAll);
// citizenRoute.get("/:id", recordController.getById);
// citizenRoute.post("/add", recordController.addRecord);
// citizenRoute.put("/edit", recordController.editRecord);
// citizenRoute.delete("/remove/:id", recordController.removeById);

export default citizenRoute;
