import { Router } from "express";
import userRouter from "./user.routes.js";
import categoryRouter from "./category.routes.js";
import postRouter from "./post.routes.js"
const router = Router();

router.use("/user", userRouter);
router.use("/category", categoryRouter);
router.use("/post", postRouter);
export default router;
