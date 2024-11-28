import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import connectDB from "./src/db/index.js";
import todosRoutes from "./src/routes/todos.routes.js";
const app = express();
// app.use(cors({ origin: "http://localhost:5173" }));
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// routes
app.use("/api/v2", todosRoutes);

connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log("MONGO DB connection failed !!! ", err);
    });

console.log(process.env.MONGO_URI)