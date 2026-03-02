import config from '../../config/config.js';
import { TOKEN_EXPIRATION } from '../../constants/constants.js';
import ApiError from '../../utils/ApiError.js';
import asyncHandler from '../../utils/asyncHandler.js';
import { timeStringToSeconds } from '../../utils/timeStringToSeconds.js';
import generateToken from '../../utils/token.js';
import authService from './auth.service.js';

const register = asyncHandler(async (req, res) => {
  const user = await authService.registerService(req.body);

  if (!user) {
    throw new ApiError(409, 'Something went wromg user not found.');
  }

  const token = await generateToken({
    userId: user._id,
    email: user.email,
  });

  const tokenExpirySecs = timeStringToSeconds(TOKEN_EXPIRATION);

  const isProduction = config.NODE_ENV === 'production';

  res.cookie('token', token, {
    httpOnly: true,
    secure: isProduction, // Use secure cookies in production
    sameSite: isProduction ? 'none' : 'lax',
    maxAge: tokenExpirySecs * 1000, // Convert to milliseconds for cookie maxAge
  });

  res.status(201).json({
    sucess: true,
    message: 'User created sucessfully',
    user,
    token,
  });
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await authService.loginService({ email, password });

  const token = await generateToken({
    userId: user._id,
    email: user.email,
  });

  const tokenExpirySecs = timeStringToSeconds(TOKEN_EXPIRATION);

  const isProduction = config.NODE_ENV === 'production';

  res.cookie('token', token, {
    httpOnly: true,
    secure: isProduction, // Use secure cookies in production
    sameSite: isProduction ? 'none' : 'lax',
    maxAge: tokenExpirySecs * 1000, // Convert to milliseconds for cookie maxAge
  });

  res.status(201).json({
    sucess: true,
    message: 'User login sucessfully',
    user,
    token,
  });
});

const forgotPassword = asyncHandler(async (req, res) => {});

const googleCallback = asyncHandler(async (req, res) => {
  const user = req.user;

  if (!user) {
    throw new ApiError(409, 'User not found');
  }

  const token = await generateToken({
    userId: user._id,
    email: user.email,
  });

  const tokenExpirySecs = timeStringToSeconds(TOKEN_EXPIRATION);

  const isProduction = config.NODE_ENV === 'production';

  res.cookie('token', token, {
    httpOnly: true,
    secure: isProduction, // Use secure cookies in production
    sameSite: isProduction ? 'none' : 'lax',
    maxAge: tokenExpirySecs * 1000, // Convert to milliseconds for cookie maxAge
  });

  res.redirect("http://localhost:5173/profile")

  res.status(201).json({
    sucess: true,
    message: 'User login sucessfully',
    user,
    token,
  });
});

const logout = asyncHandler(async (req , res) => {
  res.clearCookie("token");
  res.status(200).json({
    message:"Logout sucessfully"
  })
})

export default {
  register,
  login,
  forgotPassword,
  googleCallback,
  logout
};
