import express from 'express';
import queryLimiter from '../modules/hostel/limters/query.limter.js';
import queryValidation from '../modules/hostel/validations/query.validation.js';
import { validate } from '../middleware/validate.middleware.js';
import queryController from '../modules/hostel/controllers/query.controller.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'this is index route',
  });
});

router
  .route('/query/create')
  .post(queryLimiter, validate(queryValidation.createQueryValidation), queryController.createQuery);


export default router;
