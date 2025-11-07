import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello from the Admin router!");
});
export default router;
