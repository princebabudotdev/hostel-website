import mongoose from 'mongoose';

const hostelSchema = new mongoose.Schema(
  {

    
    name: {
      type: String,
      default: 'Kaveri Living Hostel',
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    ownerName: {
      type: String,
      trim: true,
    },

    contact: {
      phone: {
        type: String,
      },
      email: {
        type: String,
      },
      whatsapp: {
        type: String,
      },
    },

    address: {
      street: String,
      area: String,
      city: String,
      state: String,
      pincode: String,
      country: {
        type: String,
        default: 'India',
      },
    },

    location: {
      googleMapLink: String,
      latitude: Number,
      longitude: Number,
    },

    images: [
      {
        type: String,
      },
    ],

    facilities: [
      {
        type: String,
      },
    ],

    rules: [
      {
        type: String,
      },
    ],

    foodAvailable: {
      type: Boolean,
      default: false,
    },

    genderAllowed: {
      type: String,
      enum: ['boys', 'girls', 'both'],
      default: 'boys',
    },

    totalRooms: {
      type: Number,
    },

    website: {
      type: String,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
    createdBy:{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
      ref:"User"
    },
  },
  {
    timestamps: true,
  }
);

const Hostel = mongoose.model('Hostel', hostelSchema);

export default Hostel;
