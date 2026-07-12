import { Router } from "express";
import { protectRoute } from "../middlewares/auth.middleware";
import { authorizeRoles } from "../middlewares/role.middleware";

const router = Router();

router.get("/protected", protectRoute, (_req, res) => {
  res.json({
    success: true,
    message: "You accessed a protected route",
  });
});

router.get("/admin-only", protectRoute, authorizeRoles("admin"), (req, res) => {
  res.json({
    success: true,
    message: "You accessed an admin-only route",
  });
});

export default router;
