import express from 'express';
import authMiddleware from '../../middleware/authMiddleware.js';
import userController from './user.controller.js';

import userValidator from './user.validator.js';
import userLimter from './user.limter.js';
import upload from '../../config/multer.config.js';
const router = express.Router();

router.route('/me').get(authMiddleware.authenticate, userController.getme);

// update-profile

router
  .route('/update')
  .patch(
    userLimter.updateProfileLimiter,
    userValidator.updateProfileValidator,
    authMiddleware.authenticate,
    userController.updateProfile
  );

router
  .route('/update/avatar')
  .patch(
    userLimter.updateProfileAvatarLimiter,
    authMiddleware.authenticate,
    upload.single('avatar'),
    userController.updateProfileAvatar
  );

export default router;
