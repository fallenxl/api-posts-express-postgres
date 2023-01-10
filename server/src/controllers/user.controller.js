import { User, hashedPassword, findByUsername } from "../models/User.js";


export const signUp = async (req, res) => {
  try {
    const { username,password } = req.body;
    const user = await findByUsername(username);
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    const newUser = await User.create({
      username,
      password: hashedPassword(password),
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const signIn = (req, res) => {
    res.status(200).json(req.user);
}
