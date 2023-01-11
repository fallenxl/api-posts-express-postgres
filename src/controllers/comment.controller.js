import { Comment } from "../models/Comment.js";

export const getComments = async (req, res) => {
  try {
    const { id } = req.params;
    const comments = await Comment.findAll({ where: { post_id: id } });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
