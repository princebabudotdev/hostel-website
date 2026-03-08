import rateLimit from 'express-rate-limit';

// limit role changes
const changeRoleLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 20,

  standardHeaders: true,
  legacyHeaders: false,

  handler: (req, res) => {
    res.status(429).json({
      success: false,
      message: 'Too many role change attempts. Please try again later.',
    });
  },
});

// get users limiter
const getUsersLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 100,

  standardHeaders: true,
  legacyHeaders: false,

  handler: (req, res) => {
    res.status(429).json({
      success: false,
      message: 'Too many requests. Please try again later.',
    });
  },
});

// block / unblock limiter
const blockUserLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 20,

  keyGenerator: (req) => {
    if (req?.user && req?.user._id) {
      return req?.user._id.toString();
    }
    return req?.ip;
  },

  standardHeaders: true,
  legacyHeaders: false,

  handler: (req, res) => {
    res.status(429).json({
      success: false,
      message: 'Too many block/unblock actions. Please try later.',
    });
  },
});

const accountSuspend = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 100,

  standardHeaders: true,
  legacyHeaders: false,

  handler: (req, res) => {
    res.status(429).json({
      success: false,
      message: 'Too many requests. Please try again later.',
    });
  },
});

export default {
  changeRoleLimiter,
  getUsersLimiter,
  blockUserLimiter,
  accountSuspend
};
