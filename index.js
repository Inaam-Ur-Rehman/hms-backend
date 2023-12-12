import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route.js";
import mongoose from "mongoose";

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.use("/api/v1/auth", authRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
