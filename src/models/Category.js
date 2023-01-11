import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import { Post } from "./Post.js";

export const Category = sequelize.define("category", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
}, {
    timestamps: false
});

Category.hasMany(Post, {foreignKey: "category_id", sourceKey: "id"});
Post.belongsTo(Category, {foreignKey: "category_id", targetKey: "id"});