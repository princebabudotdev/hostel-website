import asyncHandler from '../../../utils/asyncHandler.js';
import queryDao from '../Dao/query.dao.js';
import queryService from '../services/query.service.js';

const createQuery = asyncHandler(async (req, res) => {
  const newquery = await queryService.createQueryService(req.body, req.ip);

  return res.status(200).json({
    success: true,
    message: 'Your query has been submitted successfully. Our team will contact you soon.',
    newquery,
  });
});

const getAllQuaries = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 2;

  const result = await queryService.getAllQuriesService(page, limit);

  return res.status(200).json({
    success: true,
    ...asyncHandler(result.message && { message: result.message }),
    data: result.data,
    pagination: result.pagination,
  });
});

export default {
  createQuery,
  getAllQuaries,
};
