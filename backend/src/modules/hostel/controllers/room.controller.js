import asyncHandler from '../../../utils/asyncHandler.js';
import roomDao from '../Dao/room.dao.js';
import roomService from '../services/room.service.js';

const createRoom = asyncHandler(async (req, res) => {
  const { roomNo, type, totalSeats, features } = req.body;

  const payload = {
    roomNo: parseInt(roomNo),
    type: String(type),
    totalSeats: parseInt(totalSeats),
    features,
  };

  const room = await roomService.createRoom(payload);

  return res.status(200).json({
    success: true,
    message: `The room is created sucessfully with roomNo ${room.roomNo}`,
    room,
  });
});

const updateRoom = asyncHandler(async (req, res) => {
  const room = await roomService.updateRoomService(req.params.roomId, req.body);

  return res.status(200).json({
    success: true,
    message: 'Room updated sucessfully',
  });
});

const assignStudentRoom = asyncHandler(async (req, res) => {
  const assignS = await roomService.asignStudentRoomServic(req.body.roomNo, req.params.sId);

  res.status(200).json({
    success: true,
    message: `Student is assign to Room ${assignS.roomNo}`,
  });
});

export default {
  createRoom,
  updateRoom,
  assignStudentRoom,
};
