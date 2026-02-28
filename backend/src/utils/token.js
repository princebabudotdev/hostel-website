// this token is replaced by accessToken and refreshToken after the learning the concept

import jwt from 'jsonwebtoken';
import { TOKEN_EXPIRATION } from '../constants/constants.js';
import config from '../config/config.js';

const generateToken = async ({ userId = null, email = null }) => {
  return await jwt.sign({ id: userId, email }, config.JWT_SECRET, {
    expiresIn: TOKEN_EXPIRATION,
  });
};

export default generateToken;
