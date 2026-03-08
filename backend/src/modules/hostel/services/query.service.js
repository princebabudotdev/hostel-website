import ApiError from '../../../utils/ApiError.js';
import queryDao from '../Dao/query.dao.js';

const createQueryService = async (queryData, ip) => {
  const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
  const queries = await queryDao.getQuriesBySameIp(ip, tenMinutesAgo);

  if (queries.length >= 5) {
    throw new ApiError(429, 'Too many queries. Please try again later.');
  }

  const payload = { ...queryData, ipAddress: ip };
  const newQuery = await queryDao.createQuery(payload);

  return newQuery;
};

const getAllQuriesService = async (page = 1, limit = 3) => {
  const MAX_LIMIT = 30;

  let cappedMessage;

  if (limit > MAX_LIMIT) {
    cappedMessage = `Limit capped to ${MAX_LIMIT} , your request ${limit}`;
    limit = MAX_LIMIT;
  }

  const { data, total } = await queryDao.getAllQuariesPagination(page, limit);
  const totalPages = Math.ceil(total / limit);

  if (page > totalPages && total > 0) {
    throw new ApiError(400, `Only ${totalPages} are available. you request ${page}`);
  }

  return {
    data,
    message: cappedMessage,
    pagination: {
      total,
      page,
      totalPages,
    },
  };
};

export default {
  createQueryService,
  getAllQuriesService,
};
