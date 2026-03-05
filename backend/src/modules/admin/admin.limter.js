import rateLimit from 'express-rate-limit';

// limit role changes
const changeRoleLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 20, // 20 requests per window
  message: {
    success: false,
    message: 'Too many role change attempts. Please try again later.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

const getUsersLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 100,
  message: {
    success: false,
    message: "Too many requests. Please try again later."
  },
  standardHeaders: true,
  legacyHeaders: false,
});

export default {
  changeRoleLimiter,
  getUsersLimiter
};
