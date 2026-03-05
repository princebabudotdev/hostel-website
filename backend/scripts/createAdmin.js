
/*
this is is update before production for now only for the testing
*/

import dotenv from 'dotenv';

dotenv.config();

import mongoose from 'mongoose';
import User from '../src/modules/auth/user.model.js';

const connectDB = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log(`mongodb connect to create super_admin`);
    })
    .catch((err) => {
      console.log(`mongodb connect to create super_admin : ${err}`);
    });
};

const createAdmin = async () => {
  try {
    connectDB();
    const adminExist = await User.findOne({ role: 'warden' });
    if (adminExist) {
      throw new Error('Super_admin already have a account ? ');
    }

    const newAdmin = await User.create({
      fullname: 'SUPER_ADMIN',
      email: 'gradebuilds@gmail.com',
      password: 'admin@grade',
      role: 'warden',
      phone:"9627936613"
    });

    console.log(`super_admin create with userId ${newAdmin._id}`);
    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.log(`Error on create admin : ${error}`);
    process.exit(1);
  }
};

createAdmin().catch((err) => {
  console.log(`error on create super admin : ${err}`);
});
