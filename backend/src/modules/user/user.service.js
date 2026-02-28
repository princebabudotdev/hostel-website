import uploadImage from '../../config/imagekit.config.js';
import ApiError from '../../utils/ApiError.js';
import userDao from './user.dao.js';

const getMe = async (id) => {
  if (!id) {
    throw new ApiError(404, 'id not found');
  }

  const user = await userDao.findById(id);
  if (!user) {
    throw new ApiError(404, 'User not found');
  }

  return user;
};

const updateProfileService = async (userId, userData) => {
  const user = await userDao.findById(userId);

  if (!user) throw new ApiError(404, 'user not found');

  if (userData?.password) throw new ApiError(400, 'password can not be update directly');

  // Update only allowed fields

  const allowedFields = [
    'fullname',
    'phone',
    'roomNo',
    'college',
    'course',
    'year',
    'avatar',
    'address',
    'emergencyContact',
  ];

  if (userData) {
    Object.keys(userData).forEach((key) => {
      if (allowedFields.includes(key) && userData[key] !== undefined) {
        user[key] = userData[key];
      }
    });
  } else {
    throw new ApiError(404, 'Update data not found');
  }

  await user.save();
  user.password = undefined;

  return user;
};

const updateProfileServiceAvatar = async (userId, file) => {
  if (!userId || !file) {
    throw new ApiError(404, 'file not found');
  }

  const user = await userDao.findById(userId);
  if (!user) {
    throw new ApiError(404, 'User not found .');
  }

  let result = null;

  if (file) {
    result = await uploadImage(file.buffer, Date.now());
    user.avatar = result.url;
  }

  await user.save;
  user.password = undefined;
  return user;
};

export default {
  getMe,
  updateProfileService,
  updateProfileServiceAvatar,
};
