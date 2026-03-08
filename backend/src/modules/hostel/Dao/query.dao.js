import Query from '../models/query.model.js';

const createQuery = async (queryData) => {
  return await Query.create(queryData);
};

const getQuriesBySameIp = async (ip, time) => {
  return await Query.find({
    ipAddress: ip,
    createdAt: { $gte: time }, // means return check the before 10 minutes query if 10:00 -> 10:05 -> 6Q || 10:07 - 10m => 9:57 < 10:00 return
  });
};

const getAllQuariesPagination = async (page = 1, limit = 10) => {
  const skip = (page - 1) * limit;

  const [data, total] = await Promise.all([
    Query.find({status:"new"}).skip(skip).limit(limit).sort({ createdAt: -1 }),
    Query.countDocuments(),
  ]);

  return { data, total };
};

export default {
  createQuery,
  getQuriesBySameIp,
  getAllQuariesPagination,
};
