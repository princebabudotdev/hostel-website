import ApiError from '../../utils/ApiError.js';
import User from '../auth/user.model.js';
import userDao from '../user/user.dao.js';

// chnage role
const changeRoleService = async (loggedUserId, userId) => {
  const user = await userDao.findById(userId);

  if (!user) {
    throw new ApiError(404, 'User not found');
  }

  // prevent admin from modifying their own role
  if (loggedUserId.toString() === userId) {
    throw new ApiError(409, 'You cannot modify your own role');
  }

  // prevent role change if account suspended or blocked
  if (user.status !== 'active' || user.isBlocked) {
    throw new ApiError(409, 'Suspended or blocked accounts cannot change role');
  }

  if (user.role === 'admin') {
    throw new ApiError(409, 'This user is already admin');
  }

  user.role = 'admin';
  await user.save();

  user.password = undefined;

  return;
};

const getUser = async (userId) => {
  if (!userId) {
    throw new ApiError(404, 'User id is required to get a user');
  }
  const user = await userDao.findById(userId);

  return user;
};

const getAllPaginatedUsers = async (page = 1, limit = 10) => {
  const MAX_LIMIT = 50; // incresed from 5 to 50 for better usabity

  let cappedMessages;

  if (limit > MAX_LIMIT) {
    cappedMessages = `Limit capped to ${MAX_LIMIT} , your request ${limit}`;
    limit = MAX_LIMIT;
  }

  const { data, total } = await userDao.getPaginatedUsers(page, limit);
  const totalPages = Math.ceil(total / limit);

  if (page > totalPages && total > 0) {
    throw new ApiError(400, `Only ${totalPages} pages available. you requested ${page}`);
  }

  return {
    data,
    messsage: cappedMessages,
    pagination: {
      total,
      page,
      limit,
      totalPages,
    },
  };
};

const blockUserService = async (userId, loggedUserId) => {
  const user = await userDao.findById(userId);
  if (!user) {
    throw new ApiError(404, 'User not found');
  }

  if (loggedUserId.toString() === userId) {
    throw new ApiError(403, 'You cannot block yourself');
  }

  if (user.isBlocked) {
    throw new ApiError(400, 'User is already blocked');
  }

  user.isBlocked = true;
  await user.save();
  return user;
};

const UnblockUserService = async (userId, loggedUserId) => {
  const user = await userDao.findById(userId);
  if (!user) {
    throw new ApiError(404, 'User not found');
  }

  if (loggedUserId.toString() === userId) {
    throw new ApiError(403, 'You cannot Unblock yourself');
  }

  if (!user.isBlocked) {
    throw new ApiError(400, 'User is already Unblocked');
  }

  user.isBlocked = false;
  await user.save();
  return user;
};

const suspendedAccountService = async (userId, loggedUserId) => {
  const user = await userDao.findById(userId);

  if (!user) {
    throw new ApiError(404, 'User not found');
  }

  if (loggedUserId.toString() === userId) {
    throw new ApiError(403, 'You cannot suspend yourself');
  }

  if (user.status === 'suspended') {
    throw new ApiError(400, 'User is already Suspended');
  }

  user.status = 'suspended';
  user.isBlocked = true;
  await user.save();

  return user;
};

const inActiveAccountService = async (userId, loggedUserId) => {};

export default {
  changeRoleService,
  getUser,
  getAllPaginatedUsers,
  blockUserService,
  UnblockUserService,
  inActiveAccountService,
  suspendedAccountService,
  inActiveAccountService,
};
