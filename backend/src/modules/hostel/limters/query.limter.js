import { rateLimit } from 'express-rate-limit';

const queryLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 15, // only 15 queries per IP
  standardHeaders: true,
  legacyHeaders: false,

  message: {
    success: false,
    message: 'Too many queries sent. Please try again after 10 minutes.',
  },
});

export default queryLimiter;
