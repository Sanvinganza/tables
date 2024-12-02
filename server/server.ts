import express, { Express } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { Create, Delete, Get, Update } from "./controllers/vacancy.route";
import bodyParser from "body-parser";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

const { MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI as string)
  .then(() => console.log("🚀MongoDB connected"))
  .catch((err) => console.log(err));

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/", Get);
app.post("/api/create", Create);
app.post("/api/update", Update);
app.delete("/api/delete", Delete);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
