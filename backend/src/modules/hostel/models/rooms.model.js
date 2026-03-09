import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema(
  {
    roomNo: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    type: {
      type: String,
      enum: ['single', 'double', 'triple', 'shared'],
      default: 'shared',
    },

    totalSeats: {
      type: Number,
      required: true,
      min: 1,
      max: 4,
    },

    availableSeats: {
      type: Number,
      min: 0,
      max:4,
    },

    features: [
      {
        type: String,
      },
    ],

    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],

    status: {
      type: String,
      enum: ['active', 'maintenance'],
      default: 'active',
    },
  },
  {
    timestamps: true,
  }
);

const Room = mongoose.model('Room', roomSchema);

export default Room;
