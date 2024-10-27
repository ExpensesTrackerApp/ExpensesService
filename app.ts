import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8010;

const app = express();

app.use(express.json());

app.listen(PORT, () => console.log(`Server's running on port: ${PORT}`));

export = app;
