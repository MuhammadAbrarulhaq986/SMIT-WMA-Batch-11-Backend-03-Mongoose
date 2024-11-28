import express from "express";
import { addTodo, deleteTodo, getTodo, getTodoWithId, updateTodo } from "../controllers/todos.controllers.js";

const router = express.Router();

router.post("/todo", addTodo);
router.get("/todo", getTodo);
router.get("/todo/:id", getTodoWithId);
router.put("/todo/:id", updateTodo);
router.delete("/todo/:id", deleteTodo);


export default router;