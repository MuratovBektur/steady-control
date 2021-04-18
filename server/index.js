import express from "express";

import connectToDB from "./connectToDB.js";
import apiRouter from "./routes/api.route.js";

const app = express();

app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});


const PORT = process.env.PORT ?? 5000;

const start = async () => {
  try {
    await connectToDB();

    app.use("/api", apiRouter);
    app.get("/", (req, res) => {
      return res.end();
    });
    app.listen(PORT, () => console.log("Server runned on port: " + PORT));
  } catch (e) {
    console.error(e);
  }
};

start();
