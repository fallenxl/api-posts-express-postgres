import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { User } from "../models/User.js";
import {
  comparePassword,
  findById,
  findByUsername,
  hashedPassword
} from "../helpers/helper.js";

passport.use(
  "local-signin",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
    },
    async (username, password, done) => {
      try {
        const user = await findByUsername(username);
        if (!user) {
          return done(null, false);
        }
        const matchedPassword = comparePassword(password, user.password);
        if (!matchedPassword) {
          return done(null, false);
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  "local-register",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
    },
    async (username, password, done) => {
      try {
        const user = await findByUsername(username);
        if (user) {
          return done(null, false);
        }
        const newUser = await User.create({
          avatar_url: `https://api.dicebear.com/5.x/avataaars-neutral/svg?seed=${username}`,
          username,
          password: hashedPassword(password),
        });
        done(null, newUser);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await findById(id);
    done(null, user);
  } catch (error) {
    done(null, false);
  }
});

export const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.status(401).json({ msg: "Unauthorized" });
};
