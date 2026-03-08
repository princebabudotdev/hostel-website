import mongoose from 'mongoose';

const querySchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 50,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },

    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: 500,
      default:"I want to take addmission in your hostel"
    },

    // Optional useful fields
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },

    collegeName: {
      type: String,
      trim: true,
    },

    joiningDate: {
      type: Date,
    },

    // Query status for admin management
    status: {
      type: String,
      enum: ['new', 'contacted', 'closed'],
      default: 'new',
      index: true,
    },

    // Admin note
    adminNote: {
      type: String,
      trim: true,
    },

    // Request metadata
    ipAddress: {
      type: String,
    },

    userAgent: {
      type: String,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt automatically
  }
);

const Query = mongoose.model('Query', querySchema);

export default Query;
