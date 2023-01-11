import { Router } from "express";
import authRouter from "./auth.routes.js";
import categoryRouter from "./category.routes.js";
import postRouter from "./post.routes.js"
const router = Router();

router.use("/auth", authRouter);
router.use("/category", categoryRouter);
router.use("/post", postRouter);
export default router;
