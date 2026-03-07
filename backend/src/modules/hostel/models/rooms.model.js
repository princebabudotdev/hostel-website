import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema(
  {
    hostel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hostel',
      required: true,
    },

    roomNumber: {
      type: String,
      required: true,
      trim: true,
    },

    floor: {
      type: Number,
      required: true,
    },

    roomType: {
      type: String,
      enum: [
        'single',
        'double',
        'triple',
        'four_sharing',
        'five_sharing',
        'six_sharing',
        'dormitory',
      ],
      required: true,
    },

    capacity: {
      type: Number,
      required: true,
    },

    totalBeds: {
      type: Number,
      required: true,
    },

    availableBeds: {
      type: Number,
      required: true,
    },

    pricePerMonth: {
      type: Number,
      required: true,
    },

    securityDeposit: {
      type: Number,
      default: 0,
    },

    description: {
      type: String,
      trim: true,
    },

    facilities: [
      {
        type: String,
      },
    ],

    amenities: {
      bed: { type: Boolean, default: true },
      mattress: { type: Boolean, default: true },
      cupboard: { type: Boolean, default: false },
      studyTable: { type: Boolean, default: false },
      chair: { type: Boolean, default: false },
      fan: { type: Boolean, default: true },
      ac: { type: Boolean, default: false },
      attachedBathroom: { type: Boolean, default: false },
      balcony: { type: Boolean, default: false },
      wifi: { type: Boolean, default: false },
    },

    images: [
      {
        type: String,
      },
    ],

    isAvailable: {
      type: Boolean,
      default: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Room = mongoose.model('Room', roomSchema);

export default Room;
