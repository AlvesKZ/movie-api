import "dotenv/config";
import express from "express";
import connectDB from "./database/database.js";

const app = express();

app.use(express.json());

connectDB();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server: http://localhost:${port}`);
});
