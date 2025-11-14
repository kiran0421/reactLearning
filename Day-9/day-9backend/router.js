import express from "express";
const router = express.Router();
import {
  getAllPosts,
  createPost,
  getPostById,
  editPostById,
  deletePostById,
} from "./controllers/task.controller.js";
import authenticateToken from "./middleware/auth.middleware.js";
import {
  getAllMeals,
  getMealById,
  createMeal,
  editMealById,
  deleteMealById,
} from "./controllers/meals.controller.js";
import {
  getTestimonials,
  createTestimonial,
  getTestimonialById,
  deleteTestimonialById,
} from "./controllers/testimonials.controller.js";
import {
  createUser,
  verifyUser,
  logout,
  deleteUser,
} from "./controllers/users.controller.js";

router.post("/login", verifyUser);
router.post("/createUser", createUser);
router.post("/logout", logout);
router.put("/deleteUser", deleteUser);

router.get("/meals", authenticateToken, getAllMeals);
router.get("/meals/:id", authenticateToken, getMealById);
router.post("/meals", authenticateToken, createMeal);
router.put("/meals/:id", authenticateToken, editMealById);
router.delete("/meals/:id", authenticateToken, deleteMealById);

router.get("/", (req, res) => res.send("Hello World!"));
router.get("/tasks", authenticateToken, getAllPosts);
router.get("/tasks/:id", authenticateToken, getPostById);
router.post("/tasks", authenticateToken, createPost);
router.put("/tasks/:id", authenticateToken, editPostById);
router.delete("/tasks/:id", authenticateToken, deletePostById);

router.get("/testimonials", authenticateToken, getTestimonials);
router.get("/testimonials/:id", authenticateToken, getTestimonialById);
router.post("/createTestimonial", authenticateToken, createTestimonial);
router.put(
  "/deleteTestimonialById/:id",
  authenticateToken,
  deleteTestimonialById
);

export default router;
