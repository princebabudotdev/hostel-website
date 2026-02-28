import jwt from 'jsonwebtoken';
import ApiError from '../utils/ApiError.js';
import userService from '../modules/user/user.service.js';

const authenticate = async (req, res, next) => {
  try {
    let token;

    // Prefer Authorization header
    if (req.headers.authorization?.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies?.token) {
      token = req.cookies.token;
    }

    if (!token) {
      throw new ApiError(401, 'Unauthorized');
    }

    let decoded;

    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      if (err.name === 'TokenExpiredError') {
        throw new ApiError(401, 'Token expired');
      }
      throw new ApiError(401, 'Invalid token');
    }

    const user = await userService.getMe(decoded.id);

    if (!user) {
      throw new ApiError(404, 'User not found');
    }

    if (user.status !== 'active') {
      throw new ApiError(403, 'Account inactive');
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return next(new ApiError(401, 'Unauthorized'));
    }

    // roles is an array form
    if (!roles.includes(req.user.role)) {
      return next(new ApiError(403, 'Forbidden'));
    }

    next();
  };
};

export default {
  restrictTo,
  authenticate,
};
