import express from "express";
import passport from "passport";
import session from "express-session";
import cors from "cors"
import morgan from "morgan";
import indexRouter from "./src/routes/index.routes.js";
import sequelize from "./src/database/database.js";
import "./src/config/passport.js"; //passport config

const app = express();
const PORT = process.env.PORT || 4001;


/*
 * Middlewares
 */
app.use(morgan("dev"));
app.use(cors());
app.use(
  session({
    secret: "FallenDev",
    cookie: { maxAge: 36800000 },
    resave: false,
    saveUninitialized: false,
  })
);

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
await sequelize.sync();

/*
 * Routes
 */
app.use(indexRouter);

/*
 * Listener
 */
app.listen(PORT, () => {
  console.log(`Server listen on http://localhost:${PORT}`);
});
