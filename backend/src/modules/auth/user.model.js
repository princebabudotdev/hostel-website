import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema(
  {
    // 🔑 Basic Info
    fullname: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
      match: [/^\S+@\S+\.\S+$/, 'Invalid email'],
    },

    // 🔐 Auth Fields
    password: {
      type: String,
      minlength: 6,
      select: false, // 🔥 don't return by default
      required: function () {
        return !this.googleId;
      },
    },

    googleId: {
      type: String,
      index: true,
      sparse: true, // allows null but unique if exists
    },

    // 🆔 Custom User ID (Readable)
    userId: {
      type: String,
      unique: true,
      index: true,
    },

    // 🧑‍💼 Role System
    role: {
      type: String,
      enum: ['user', 'admin', 'warden', 'staff'],
      default: 'user',
    },

    // 📊 Status Control
    status: {
      type: String,
      enum: ['active', 'inactive', 'suspended'],
      default: 'active',
    },

    isBlocked: {
      type: Boolean,
      required: true,
      default: false,
    },

    accountStatus: {
      type: String,
      enum: ['pending', 'verified', 'rejected'],
      default: 'pending',
    },

    // 🍱 Hostel Feature
    isTiffinActive: {
      type: Boolean,
      default: false,
    },

    // 📱 Contact (optional but useful)
    phone: {
      type: String,
      unique: true,
      sparse: true,
      required: function () {
        return !this.googleId;
      },
    },

    // 🏠 Hostel Mapping
    hostelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hostel',
    },

    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Room',
    },

    // 🔐 Security
    refreshToken: {
      type: String,
      select: false,
    },

    passwordChangedAt: Date,

    // 📸 Optional profile
    avatar: {
      type: String,
    },
    // 🎓 Student / Hosteler Info
    roomNo: {
      type: String,
      trim: true,
    },

    college: {
      type: String,
      trim: true,
      maxlength: 150,
    },

    course: {
      type: String,
      trim: true,
    },

    year: {
      type: Number, // e.g., 1, 2, 3, 4
      min: 1,
      max: 10,
    },

    guardianName: {
      type: String,
      trim: true,
    },

    guardianPhone: {
      type: String,
      trim: true,
    },

    address: {
      type: String,
      trim: true,
    },

    emergencyContact: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true, // ✅ createdAt, updatedAt auto
  }
);

userSchema.index({ email: 1, role: 1 });

userSchema.pre('save', async function () {
  if (this.googleId === null) {
    this.googleId = undefined;
  }

  if (!this.password) return;
  if (!this.isModified('password')) return;

  this.password = await bcrypt.hash(this.password, 10);
  return;
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

userSchema.pre('save', function () {
  if (!this.userId) {
    this.userId = `USR-${Date.now()}`;
  }
  return;
});

const User = mongoose.model('User', userSchema);
export default User;
