import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import router from "./router.js";

const app = express();
const PORT = process.env.ORDER_DETAILS_SERVICE_PORT || 3003;

app.use(express.json());
app.use(cors());
app.use("/", router);
app.use((err, req, res, next) => {
  console.error("Order Details Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});
app.listen(PORT, () => {
  console.log(`Order Details Service is running on port ${PORT}`);
});
