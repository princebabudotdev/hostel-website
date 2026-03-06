import express from 'express';
import authMiddleware from '../../middleware/authMiddleware.js';
import userDao from '../user/user.dao.js';
import adminController from './admin.controller.js';
import adminLimter from './admin.limter.js';
import adminValidation from './admin.validation.js';
const router = express.Router();

// chnage user role to admin by warden account .
router
  .route('/change/role/:userId')
  .patch(
    adminLimter.changeRoleLimiter,
    adminValidation.validateUserIdParam,
    authMiddleware.authenticate,
    authMiddleware.restrictTo('warden'),
    adminController.changeRole
  );

// block and unblock user by admin and warden ?
router.route('/users/:id/block');
router.route('/users/:id/unblock');

// get users and get user by userId and get random user ?

// get user by id
router
  .route('/users/:userId')
  .get(
    adminLimter.changeRoleLimiter,
    adminValidation.validateUserIdParam,
    authMiddleware.authenticate,
    authMiddleware.restrictTo('admin', 'warden'),
    adminController.getUser
  );

/* get allUsers by pagination controlled by warden and user */
router
  .route('/users')
  .get(
    adminLimter.getUsersLimiter,
    adminValidation.validateUserPagination,
    authMiddleware.authenticate,
    authMiddleware.restrictTo('admin', 'warden'),
    adminController.getAllUsers
  );

/*
 * block user
 * unblock user
 */

router
  .route('/users/:userId/block')
  .patch(
    adminLimter.blockUserLimiter,
    authMiddleware.authenticate,
    authMiddleware.restrictTo('warden', 'admin'),
    adminController.blockUser
  );

router
  .route('/users/:userId/unblock')
  .patch(
    adminLimter.blockUserLimiter,
    authMiddleware.authenticate,
    authMiddleware.restrictTo('warden', 'admin'),
    adminController.unBlockUser
  );

/*
 * suspend account
 * inactive account
 */

router
  .route('/users/:userId/suspend')
  .patch(
    adminLimter.accountSuspend,
    authMiddleware.authenticate,
    authMiddleware.restrictTo('warden', 'admin'),
    adminController.suspendedAccount
  );

export default router;
