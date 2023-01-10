import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import bcrypt from "bcrypt";
import { Post } from "./Post.js";

export const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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
    defaultValue: DataTypes.NOW
  }
},
{
  timestamps:false
});

/*
 * References
 */

User.hasMany(Post, {foreignKey: "user_id", sourceKey: "id"});
Post.belongsTo(User, {foreignKey: "user_id", targetKey: "id"});


/*
 * Functions
 */
export const findById = async (id) => {
  const found = await User.findOne({ where: { id: id } });
  return found;
};

export const findByUsername = async (username) => {
  const found = await User.findOne({ where: { username: username } });
  return found;
};

export const hashedPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

export const comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};
