import express from "express";
const router = express.Router();
import {
  getAllPosts,
  createPost,
  getPostById,
  editPostById,
} from "./controllers/task.controller.js";

router.get("/", (req, res) => res.send("Hello World!"));

router.get("/tasks", getAllPosts);

router.get("/tasks/:id", getPostById);

router.post("/tasks", createPost);

router.put("/tasks/:id", editPostById);

export default router;
