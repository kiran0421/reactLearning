import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import router from "./router.js";

const app = express();
const PORT = process.env.PRODUCT_DETAILS_SERVICE_PORT || 3002;

app.use(express.json());
app.use(cors());
app.use("/", router);
app.use((err, req, res, next) => {
  console.error("Product Details Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});
app.listen(PORT, () => {
  console.log(`Product Details Service is running on port ${PORT}`);
});
