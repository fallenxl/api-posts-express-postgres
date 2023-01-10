import { Sequelize } from "sequelize";

const sequelize = new Sequelize("blog_project", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
