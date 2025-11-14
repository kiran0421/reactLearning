import express from "express";
import cors from "cors";
import router from "./router.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1", router);
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "Route not found",
  });
});
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
