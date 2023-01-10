import { Post } from "../models/Post.js";

export const getPosts = async (req, res) => {
  try {
    const allPosts = await Post.findAll();
    res.status(200).json(allPosts);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const createPost = async (req, res) => {
  try {
    const { id } = req.user;
    const { title, content } = req.body;
    const post = await Post.create({
      title,
      content,
      user_id: id,
      category_id: 1
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
