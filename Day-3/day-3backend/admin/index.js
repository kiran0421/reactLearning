import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import router from "./router.js";

dotenv.config();
const app = express();
const PORT = process.env.ADMIN_PORT || 4000;

app.use(express.json());
app.use(cors());
app.use("/", router);
app.use((err, req, res, next) => {
  console.error("Admin Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
