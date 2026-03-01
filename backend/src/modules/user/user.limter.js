import {rateLimit} from 'express-rate-limit'


const updateProfileLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 5,
  message: {
    status: 429,
    message: "Too many profile updates. Try again later."
  },
  standardHeaders: true,
  legacyHeaders: false,
});


const updateProfileAvatarLimiter = rateLimit({
  windowMs: 30 * 60 * 1000, // 30 min
  max: 5,
  message: {
    status: 429,
    message: "Too many profile updates. Try again later."
  },
  standardHeaders: true,
  legacyHeaders: false,
});



export default {
    updateProfileLimiter,
    updateProfileAvatarLimiter

}