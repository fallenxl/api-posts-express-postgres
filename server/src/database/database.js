import { Sequelize } from "sequelize";

const sequelize = new Sequelize("postgresql://postgres:02PjGBqUyptaU8WIunKu@containers-us-west-140.railway.app:5513/railway", {
  dialect: "postgres"
});

export default sequelize;
