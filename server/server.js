import express from "express";
import connectToMongoDB from "./database.js";
import projectRoutes from "./routes/projectRoutes.js"
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const app = express();
app.use(express.json());

await connectToMongoDB();

app.use("/projects", projectRoutes);

app.listen(process.env.PORT, () =>{
    console.log(`Server is running on port: ${process.env.PORT}`);
});