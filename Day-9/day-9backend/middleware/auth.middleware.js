import { tokensList } from "../controllers/users.controller.js";

const authenticateToken = (req, res, next) => {
  try {
    const username = req.headers["username"];
    const token = req.headers["token"];
    if (!username)
      return res
        .status(401)
        .json({ success: false, message: "Username required" });
    if (!token)
      return res
        .status(401)
        .json({ success: false, message: "Access token required" });

    const userWithToken = tokensList.find(
      (user) => user.username === username && user.token === token
    );

    if (!userWithToken) {
      return res.status(403).json({
        success: false,
        message: "Invalid or expired token",
      });
    }

    // Attach user info to request object for use in route handlers
    req.user = userWithToken;
    req.token = token;

    next(); // Proceed to the next middleware/route handler
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

export default authenticateToken;
