import User from '../auth/user.model.js';

const findById = async (id) => {
  return await User.findById(id);
};

export default {
  findById,
};
