import Hostel from '../models/hostel.model.js';

const createHostel = async (hostelData) => {
  return await Hostel.create(hostelData);
};

const findHostels = async (createdBy) => {
  return await Hostel.find({
    createdBy,
  }).populate("createdBy" , "fullname email");
};

const findByCreatedByHostel = async (createdBy) => {
    return await Hostel.findOne({
        createdBy
    })
}



export default {
  createHostel,
  findHostels,
  findByCreatedByHostel
};
