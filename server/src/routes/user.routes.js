import { Router } from "express";
import { signUp, signIn } from "../controllers/user.controller.js";
import { isAuthenticated } from "../config/passport.js";
import passport from "passport";
const router = Router();

router.post("/signup", signUp);

router.post(
  "/signin",
  passport.authenticate("local-signin"),
  signIn
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
