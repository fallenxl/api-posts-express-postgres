import { Router } from "express";
import { register, login } from "../controllers/auth.controller.js";
import { isAuthenticated } from "../config/passport.js";
import passport from "passport";
const router = Router();

router.post("/register", passport.authenticate("local-register") ,register);

router.post(
  "/login",
  passport.authenticate("local-signin"),
  login
);

router.get(
  "/profile",
  isAuthenticated,
  (req, res) => {
    res.json({ msg: "Bienvenido" });
  }
);

router.post("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.json({ msg: "Se ha cerrado sesión" });
  });
});
export default router;
