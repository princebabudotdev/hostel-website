import Room from '../models/rooms.model.js';

const createRoom = async (roomData) => {
  return await Room.create(roomData);
};

const findRoomByRoomNo = async (roomNo) => {
  return await Room.findOne({ roomNo });
};

const findRoomById = async (id) => {
  return await Room.findById(id);
};

export default {
  createRoom,
  findRoomByRoomNo,
  findRoomById,
};
