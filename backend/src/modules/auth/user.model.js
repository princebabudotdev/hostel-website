import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema(
  {
    // 🔑 Basic Info
    fullName: {
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
      match: [/^\d{10}$/, 'Invalid phone number'],
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
