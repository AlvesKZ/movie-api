import "dotenv/config";
import express from "express";
import connectDB from "./database/database.js";
import router from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(router);

const port = process.env.PORT || 3000;

const start = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log(`Server: http://localhost:${port}`);
    });
};

start();