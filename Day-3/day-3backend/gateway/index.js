import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import router from "./routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/api/v1", router);
app.use((err, req, res, next) => {
  console.error("Gateway Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
