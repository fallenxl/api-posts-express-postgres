import { Router } from "express";
import { createPost, getPosts, getPost } from "../controllers/post.controller.js";
import routerComments from "./comment.routes.js"
import { isAuthenticated } from "../config/passport.js";
const router = Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post('/create-post', isAuthenticated, createPost);

router.use("/comments", routerComments);

export default router;