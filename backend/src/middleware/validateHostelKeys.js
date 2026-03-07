import ApiError from "../utils/ApiError.js";

const allowedFields = [
  'name',
  'description',
  'ownerName',
  'contact',
  'address',
  'location',
  'facilities',
  'rules',
  'foodAvailable',
  'genderAllowed',
  'totalRooms',
  'website',
];

export const validateHostelKeys = (req, res, next) => {
  const requestKeys = Object.keys(req.body);

  const invalidKeys = requestKeys.filter((key) => !allowedFields.includes(key));

  if (invalidKeys.length > 0) {
    return res.status(400).json({
      success: false,
      message: `Invalid fields: ${invalidKeys.join(', ')}`,
    });
  }

  if(!requestKeys){
    throw new ApiError(404 , "Keys not found")
  }

  req.keys = allowedFields

  next();
};
