import bcrypt from 'bcrypt';
import { User } from '../models/User.js';

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
  