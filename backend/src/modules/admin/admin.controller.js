import ApiError from '../../utils/ApiError.js';
import asyncHandler from '../../utils/asyncHandler.js';
import adminService from './admin.service.js';

/* change role by warden to admin */
const changeRole = asyncHandler(async (req, res) => {
  const loggedUserId = req.user._id;
  const { userId } = req.params;

  const user = await adminService.changeRoleService(loggedUserId, userId);

  res.status(200).json({
    message: 'Your account role change sucessfully',
  });
});

/* user managment */

/*
 * desc USER MANAGMENT
 * getUser
 * getUsers
 * remove user
 * update user
 * change role only warden can do this
 * block and unblock user
 * tiffin => active or deactive
 */

const getUser = asyncHandler(async (req, res) => {
  const user = await adminService.getUser(req.params.userId);
  if (!user) {
    throw new ApiError(404, 'User not found');
  }

  return res.status(200).json({
    user,
  });
});

const getAllUsers = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const result = await adminService.getAllPaginatedUsers(page, limit);

  res.status(200).json({
    sucess: true,
    ...(result.messsage && { message: result.messsage }),
    data: result.data,
    pagination: result.pagination,
  });
});

/*
 * block user
 * unblock user
 */

const blockUser = asyncHandler(async (req, res) => {
  const user = await adminService.blockUserService(req.params.userId, req.user._id);

  return res.status(200).json({
    success: true,
    message: `User ${user.fullname} (${user.email}) blocked successfully`,
  });
});

const unBlockUser = asyncHandler(async (req, res) => {
  const user = await adminService.UnblockUserService(req.params.userId, req.user._id);
  return res.status(200).json({
    success: true,
    message: `User ${user.fullname} (${user.email}) Unblocked successfully`,
  });
});

/*
 * suspend account
 * inactive account
 */

const suspendedAccount = asyncHandler(async (req, res) => {
  const user = await adminService.suspendedAccountService(req.params.userId, req.user._id);

  return res.status(200).json({
    success: true,
    message: `User Account ${user.fullname} ${user.status} .`,
  });
});

const ActiveAccount = asyncHandler(async (req, res) => {
  const user = await adminService.ActiveAccountService(req.params.userId, req.user._id);

  return res.status(200).json({
    success: true,
    message: `User Account ${user.fullname} ${user.status} .`,
  });
});

export default {
  changeRole,
  getUser,
  getAllUsers,
  blockUser,
  unBlockUser,
  suspendedAccount,
  ActiveAccount,
};
