import User from '../auth/user.model.js';

const findById = async (id) => {
  return await User.findById(id);
};

const getPaginatedUsers = async (page = 1, limit = 10) => {
  const skip = (page - 1) * limit;

  const [data, total] = await Promise.all([
    User.find().skip(skip).limit(limit).sort({ createdAt: -1 }), // Sort by newest first
    User.countDocuments(),
  ]);

  return { data, total };
};

const getSuspended = async () => {
  
}

export default {
  findById,
  getPaginatedUsers,
};
