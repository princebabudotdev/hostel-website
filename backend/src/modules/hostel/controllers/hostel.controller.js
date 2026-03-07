import asyncHandler from '../../../utils/asyncHandler.js';
import Hostel from '../models/hostel.model.js';
import hostelService from '../services/hostel.service.js';

const createHostel = asyncHandler(async (req, res) => {
  const hostel = await hostelService.createHostelService(req.body, req.user._id);

  res.status(200).json({
    success: true,
    message: `${hostel.name} Hostel is created with hostel id ${hostel._id} Sucessfully`,
  });
});

const updateHostel = asyncHandler(async (req, res) => {
  await hostelService.UpdateHostelService(req.user._id, req.keys, req.body);

  return res.status(200).json({
    success: true,
    message: 'Hostel data updated sucessfully',
  });
});

const updateHostelImages = asyncHandler(async (req, res) => {
  const images = await hostelService.UpdateHostelImagesService(req.user._id, req.files);

  return res.status(200).json({
    success: true,
    message: 'Hostel images added sucessfully',
    images
  });
});

export default {
  createHostel,
  updateHostel,
  updateHostelImages,
};
