import User from './user.model.js';

const createUser = async (userdata) => {
  const data = {
    fullName: userdata.fullName,
    email: userdata.email,
    password: userdata.password,
    role: userdata.role || 'user',
    googleId: userdata.googleId || null,
  };

  if (userdata.phone) {
    data.phone = userdata.phone;
  }

  return await User.create(userdata);
};

const findByEmail = async (email) => {
  return await User.findOne({ email }).select('+password');
};

const findfindByGoogleId = async (googleId) => {
  return await User.findOne({ googleId });
};

export default {
  findByEmail,
  createUser,
  findfindByGoogleId,
};
