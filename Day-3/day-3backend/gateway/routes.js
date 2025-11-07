import express from "express";
import dotenv from "dotenv";
import { createProxyMiddleware } from "http-proxy-middleware";

dotenv.config();
const router = express.Router();

// Health check (no prefix here)
router.get("/", (req, res) => {
  res.send("🚀 Hello from the API Gateway Router!");
});

// Map of route prefixes to their target microservice
const serviceMap = {
  "/users": process.env.USER_SERVICE_URL,
  "/products": process.env.PRODUCT_SERVICE_URL,
  "/orders": process.env.ORDER_SERVICE_URL,
  "/admin": process.env.ADMIN_SERVICE_URL,
};

// Dynamically register proxy routes
Object.entries(serviceMap).forEach(([route, target]) => {
  router.use(
    route,
    createProxyMiddleware({
      target,
      changeOrigin: true,
      pathRewrite: (path) => path.replace(route, ""), // only strip the matched prefix
      onProxyReq: (proxyReq, req) => {
        console.log(`${req.method} ${req.originalUrl} → ${target}`);
      },
      onError: (err, req, res) => {
        console.error(`Error proxying ${req.originalUrl}:`, err.message);
        res.status(502).json({ error: "Bad Gateway", details: err.message });
      },
    })
  );
});

export default router;
