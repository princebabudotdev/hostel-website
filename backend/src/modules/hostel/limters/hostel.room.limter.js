import { rateLimit } from 'express-rate-limit';

const createHostelLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // allow only 5 requests
  message: {
    success: false,
    message: 'Too many hostel creation requests. Please try again later.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

const createRoomLimiter = rateLimit({

  windowMs: 5 * 60 * 1000, // 5 minutes

  max: 10, // max 10 requests

  message: {
    success: false,
    message: "Too many room creation attempts. Please try later.",
  },

  standardHeaders: true,
  legacyHeaders: false,

});

export default {
  createHostelLimiter,
  createRoomLimiter
};
