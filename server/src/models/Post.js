import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import { Comment } from "./Comment.js";

export const Post = sequelize.define("post", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
},{
  timestamps: false,
});

Post.hasMany(Comment, {foreignKey: "post_id", sourceKey: "id"});
Comment.belongsTo(Post, {foreignKey: "post_id", targetKey:"id"});
