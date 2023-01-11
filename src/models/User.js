import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import { Post } from "./Post.js";

export const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    avatar_url: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false,
  }
);

/*
 * References
 */

User.hasMany(Post, { foreignKey: "user_id", sourceKey: "id" });
Post.belongsTo(User, { foreignKey: "user_id", targetKey: "id" });

