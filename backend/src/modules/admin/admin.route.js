import express from 'express';
import authMiddleware from '../../middleware/authMiddleware.js';
import userDao from '../user/user.dao.js';
import adminController from './admin.controller.js';
import adminLimter from './admin.limter.js';
import adminValidation from './admin.validation.js';
import hostelController from '../hostel/controllers/hostel.controller.js';
import hostelRoomValidation from '../hostel/validations/hostel.room.validation.js';
import { validate } from '../../middleware/validate.middleware.js';
import { validateHostelKeys } from '../../middleware/validateHostelKeys.js';
import upload from '../../config/multer.config.js';
import hostelRoomLimter from '../hostel/limters/hostel.room.limter.js';
import queryController from '../hostel/controllers/query.controller.js';
import roomController from '../hostel/controllers/room.controller.js';
const router = express.Router();

// chnage user role to admin by warden account .
router
  .route('/change/role/:userId')
  .patch(
    adminLimter.changeRoleLimiter,
    validate(adminValidation.validateUserIdParam),
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
    validate(adminValidation.validateUserIdParam),
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

router
  .route('/users/:userId/active')
  .patch(
    adminLimter.accountSuspend,
    authMiddleware.authenticate,
    authMiddleware.restrictTo('warden', 'admin'),
    adminController.ActiveAccount
  );

/* 
  * create hostel
  * update hostel => only warden can do this
  *  update hostel i => only warden can do this
  * delete hsotel images
  ! RORMS 
  * create room 
  * update room 
  * assign student to room 
  * re-assign student to room 
  * delete room 
  */

router
  .route('/create/hostel')
  .post(
    hostelRoomLimter.createHostelLimiter,
    validateHostelKeys,
    validate(hostelRoomValidation.createHostelValidation),
    authMiddleware.authenticate,
    authMiddleware.restrictTo('warden'),
    hostelController.createHostel
  );

router
  .route('/update/hostel')
  .patch(
    hostelRoomLimter.createHostelLimiter,
    validateHostelKeys,
    validate(hostelRoomValidation.updateHostelValidation),
    authMiddleware.authenticate,
    authMiddleware.restrictTo('warden', 'admin'),
    hostelController.updateHostel
  );

router.route('/update/hostel/images').patch(
  authMiddleware.authenticate,
  authMiddleware.restrictTo('warden', 'admin'),
  upload.array('images', 5), // maxium 2 images only upload at a time
  hostelController.updateHostelImages
);

/* */

router
  .route('/all/quaries')
  .get(
    authMiddleware.authenticate,
    authMiddleware.restrictTo('warden', 'admin'),
    queryController.getAllQuaries
  );

/*
 * Room create
 * Room Update
 */

router
  .route('/rooms/create')
  .post(
    hostelRoomLimter.createRoomLimiter,
    validate(hostelRoomValidation.createRoomValidation),
    authMiddleware.authenticate,
    authMiddleware.restrictTo('warden', 'admin'),
    roomController.createRoom
  );

router
  .route('/rooms/:roomId/update')
  .post(
    hostelRoomLimter.createRoomLimiter,
    validate(hostelRoomValidation.createRoomValidation),
    authMiddleware.authenticate,
    authMiddleware.restrictTo('warden', 'admin'),
    roomController.updateRoom
  );

export default router;
