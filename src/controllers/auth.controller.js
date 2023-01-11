import { User} from "../models/User.js";
import { findByUsername, hashedPassword } from "../helpers/helper.js";


export const signUp = async (req, res) => {
  try {
    const { username,password } = req.body;
    const user = await findByUsername(username);
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    const newUser = await User.create({
      avatar_url: `https://api.dicebear.com/5.x/avataaars-neutral/svg?seed=${username}`,
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
