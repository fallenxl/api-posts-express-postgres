import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

export const Category = sequelize.define("category", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(10),
        allowNull: false
    }
});
await Category.create({
    id: 1,
    name: "Category 1"
})

await sequelize.sync({force: true})