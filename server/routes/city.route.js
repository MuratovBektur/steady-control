import express from "express";
import cityController from "../controllers/city.controller.js";

const cityRoute = express.Router();

cityRoute.get("/", (req, res) => {
    res.json("cityRoute");
});
cityRoute.get("/all", cityController.getAll);

export default cityRoute;
