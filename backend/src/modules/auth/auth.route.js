import express from 'express';
import User from './user.model.js';
const router = express.Router();

router.post('/create', async (req, res) => {
  const user = await User.create({
    fullName: 'Prince Babu',
    email: 'Princebabu4495@gmail.com',
    password: '12345678',
    role: 'user',
    phone: '9758828009',
  });

  res.status(200).json({
    user,
  });
});

export default router;
