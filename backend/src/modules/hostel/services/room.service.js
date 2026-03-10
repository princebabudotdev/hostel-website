import ApiError from '../../../utils/ApiError.js';
import userDao from '../../user/user.dao.js';
import roomDao from '../Dao/room.dao.js';

const createRoom = async (roomdata) => {
  const roomExist = await roomDao.findRoomByRoomNo(roomdata.roomNo);

  if (roomExist) {
    throw new ApiError(400, 'Room already exists with this room number');
  }

  const newRoom = await roomDao.createRoom(roomdata);

  if (!newRoom) {
    throw new ApiError(500, 'Failed to create room');
  }

  return newRoom;
};

const updateRoomService = async (roomId, roomData) => {
  const existRoom = await roomDao.findRoomById(roomId);

  if (!existRoom) {
    throw new ApiError(404, 'Room not found');
  }

  // if req room no is equal to db roomNo then update
  // check the req roomNo is not equal to exist RoomNo then check req roomNo is find in db if not then update if exist then error
  if (roomData?.roomNo && roomData?.roomNo !== existRoom?.roomNo) {
    // 308 308 !== 308
    const roomexist = await roomDao.findRoomByRoomNo(roomData?.roomNo);

    if (roomexist) {
      throw new ApiError(400, 'Room number already exists');
    }
  }

  const validkeys = ['roomNo', 'type', 'totalSeats', 'features'];

  validkeys.forEach((key) => {
    if (roomData[key] !== undefined) {
      existRoom[key] = roomData[key];
    }
  });

  await existRoom.save();

  return existRoom;
};

const asignStudentRoomServic = async (roomNo, sId) => {
  const room = await roomDao.findRoomByRoomNo(roomNo);

  if (!room) {
    throw new ApiError(404, `Room is not available ${roomNo}`);
  }

  const student = await userDao.findById(sId);

  if (!student) {
    throw new ApiError(404, `Student is not found`);
  }

  if (student.status !== 'active') {
    throw new ApiError(400, 'Only Active students are assign room');
  }

  if (room.students.includes(sId)) {
    throw new ApiError(400, 'Student already assigned to this room');
  }

  if (room.students.length >= room.totalSeats) {
    throw new ApiError(400, 'Room is full');
  }

  if (student.roomId) {
    throw new ApiError(400, 'Student already assigned to another room');
  }

  room.students.push(sId);
  room.availableSeats = room.totalSeats - room.students.length;
  await room.save();

  student.roomId = room._id;
  await student.save();

  return room;
};

export default {
  createRoom,
  updateRoomService,
  asignStudentRoomServic,
};
