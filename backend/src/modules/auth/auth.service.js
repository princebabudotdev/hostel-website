import ApiError from '../../utils/ApiError.js';
import authDao from './auth.dao.js';

const registerService = async (userdata) => {
  const existUser = await authDao.findByEmail(userdata.email);

  if (existUser) {
    throw new ApiError(404, 'User already registered');
  }

  const newUser = await authDao.createUser({
    fullname: userdata.fullname,
    email: userdata.email,
    password: userdata.password,
    phone: userdata.phone,
    role: 'user',
    googleId: userdata.googleId || null,
  });

  newUser.password = undefined;
  return newUser;
};

const loginService = async ({ email, password }) => {
  const user = await authDao.findByEmail(email);

  if (!user) {
    throw new ApiError(404, 'User not found');
  }

  if (!(await user.comparePassword(password))) {
    throw new ApiError(401, 'Wrong Password');
  }

  user.password = undefined;
  return user;
};

const forgotPasswordService = async ({ email, password }) => {
  
};




export default {
  registerService,
  loginService,
  forgotPasswordService
};
