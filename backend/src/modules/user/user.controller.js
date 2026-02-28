import ApiError from '../../utils/ApiError.js';
import asyncHandler from '../../utils/asyncHandler.js';
import userService from './user.service.js';

const getme = asyncHandler(async (req, res) => {
  const user = req.user;

  if (!user) {
    throw new ApiError(404, 'user not found');
  }

  res.status(200).json({
    success: true,
    user,
  });
});

const updateProfile = asyncHandler(async (req, res) => {
  const user = await userService.updateProfileService(req.user._id, req.body);

  if (!user) {
    return res.status(404).json({ success: false, message: 'User not found' });
  }

  res.status(200).json({ success: true, data: user });
});

const updateProfileAvatar = asyncHandler(async (req, res) => {
  const user = await userService.updateProfileServiceAvatar(req.user._id, req.file);

  if (!user) {
    throw new ApiError(404, 'User not found .');
  }

  res.status(200).json({
    message: 'Profile picture updated sucessfully',
  });
});

export default {
  getme,
  updateProfile,
  updateProfileAvatar,
};
