import { Post } from "../models/Post.js";
import { User } from "../models/User.js";
import { Category } from "../models/Category.js";
import { validateParamsId } from "../helpers/helper.js";

export const getPosts = async (req, res) => {
  try {
    const allPosts = await Post.findAll({
      include: [
        { model: User, attributes: ["id","avatar_url", "username"] },
        { model: Category },
      ],
    });
    res.status(200).json(allPosts);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    if (!validateParamsId(id)) {
      return res.status(400).json({ error: "Invalid id" });
    }
    const post = await Post.findOne({
      where: { id },
      include: [
        { model: User, attributes: ["id","avatar_url", "username"] },
        { model: Category },
      ],
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

export const createPost = async (req, res) => {
  try {
    const { id } = req.user;
    const { title, content } = req.body;
    const post = await Post.create({
      title,
      content,
      user_id: id,
      category_id: 1,
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
