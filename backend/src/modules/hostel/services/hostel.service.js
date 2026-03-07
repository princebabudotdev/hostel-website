import uploadImage from '../../../config/imagekit.config.js';
import ApiError from '../../../utils/ApiError.js';
import hostelDao from '../Dao/hostel.dao.js';

const createHostelService = async (hostelData, createdBy) => {
  const hostelExist = await hostelDao.findHostels(createdBy);

  if (hostelExist.length > 0) {
    throw new ApiError(400, 'Only one hostel can create for now');
  }

  const payload = { ...hostelData, createdBy };

  const newHostel = await hostelDao.createHostel(payload);

  if (!newHostel) {
    throw new ApiError(400, 'Something went wrong hostel not create');
  }

  return newHostel;
};

const UpdateHostelService = async (owner, validKeys, hostelData) => {
  const hostel = await hostelDao.findByCreatedByHostel(owner);

  if (!hostel) {
    throw new ApiError(404, 'Hostel not found');
  }

  validKeys.forEach((key) => {
    if (hostelData[key] !== undefined) {
      hostel[key] = hostelData[key];
    }
  });

  await hostel.save();

  return hostel;
};

const UpdateHostelImagesService = async (owner, images) => {
  if (!images || images.length < 1) {
    throw new ApiError(400, 'Image is required to update image');
  }

  const hostel = await hostelDao.findByCreatedByHostel(owner);

  if (!hostel) {
    throw new ApiError(404, 'Hostel not found');
  }

  const uploadedImages = await Promise.all(
    images.map((img) => uploadImage(img.buffer, Date.now()))
  );

  uploadedImages.forEach((img) => {
    hostel.images.push(img.url);
  });

  await hostel.save();

  return hostel.images;
};

export default {
  createHostelService,
  UpdateHostelService,
  UpdateHostelImagesService,
};
