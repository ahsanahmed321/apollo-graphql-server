import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JwtUser } from '../types/auth';

const SALT_ROUND = 10;

export const JWT_SECRET = process.env.JWT_SECRET as string;

export const verifyUser = (token: string): JwtUser => {
  return jwt.verify(token, JWT_SECRET) as JwtUser;
};

export const encryptCredential = async (password: string): Promise<string> => {
  const SALT = bcrypt.genSaltSync(SALT_ROUND);
  const hash = await bcrypt.hash(password, SALT);
  return hash;
};

export const validateCredential = async (value: string, hashedValue: string): Promise<boolean> => {
  const validate = await bcrypt.compare(value, hashedValue);
  return validate;
};
