import express from 'express';
import User from './user.model.js';
import { validate } from '../../middleware/validate.middleware.js';
import authValidator from './auth.validator.js';
import authController from './auth.controller.js';
import authLimter from './auth.limter.js';
const router = express.Router();
import passport from 'passport';
import authMiddleware from '../../middleware/authMiddleware.js';

router
  .route('/register')
  .post(
    authLimter.registerLimiter,
    validate(authValidator.registerValidation),
    authController.register
  );

router
  .route('/login')
  .post(authLimter.loginLimiter, validate(authValidator.loginValidation), authController.login);

// google auth

router
  .route('/google')
  .get(authLimter.loginLimiter, passport.authenticate('google', { scope: ['profile', 'email'] }));

router.route('/google/callback').get(
  authLimter.loginLimiter,
  passport.authenticate('google', { failureRedirect: '/login', session: false }),

  authController.googleCallback
);

export default router;
