import { Router } from "express";
import { getComments } from "../controllers/comment.controller.js";
const router = Router();

router.get("/:id", getComments);

export default router;