import mongoose from 'mongoose';

const hostelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: 'Kaveri Livings Hostel',
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    images: [
      {
        type: String, // image URLs
      },
    ],

    location: {
      address: {
        type: String,
        trim: true,
      },
      city: {
        type: String,
        default: 'Meerut',
      },
      state: {
        type: String,
        default: 'Uttar Pradesh',
      },
      country: {
        type: String,
        default: 'India',
      },
      pincode: {
        type: String,
      },
    },

    contactInfo: {
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

    pricing: {
      monthlyRent: {
        type: Number,
      },
      securityDeposit: {
        type: Number,
      },
      electricityIncluded: {
        type: Boolean,
        default: false,
      },
      wifiIncluded: {
        type: Boolean,
        default: true,
      },
      foodIncluded: {
        type: Boolean,
        default: false,
      },
    },

    rooms: {
      totalRooms: {
        type: Number,
        default: 0,
      },
      availableRooms: {
        type: Number,
        default: 0,
      },
      roomTypes: [
        {
          type: {
            type: String,
            enum: ['single', 'double', 'triple', 'dormitory'],
          },
          price: Number,
          total: Number,
          available: Number,
        },
      ],
    },

    amenities: [
      {
        type: String,
      },
    ],

    owner: {
      name: String,
      contact: String,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Hostel', hostelSchema);
