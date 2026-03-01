import { body } from 'express-validator';

const updateProfileValidator = [
  body('fullname')
    .optional()
    .isString()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Fullname must be 2-100 characters'),

  body('phone')
    .optional()
    .matches(/^[6-9]\d{9}$/)
    .withMessage('Invalid phone number'),

  body('roomNo')
    .optional()
    .isString()
    .trim()
    .isLength({ max: 20 })
    .withMessage('Room number too long'),

  body('college')
    .optional()
    .isString()
    .trim()
    .isLength({ max: 150 })
    .withMessage('College name too long'),

  body('course').optional().isString().trim().isLength({ max: 100 }).withMessage('Course too long'),

  body('year').optional().isInt({ min: 1, max: 10 }).withMessage('Year must be between 1 and 10'),

  body('avatar').optional().isURL().withMessage('Avatar must be a valid URL'),

  body('address')
    .optional()
    .isString()
    .trim()
    .isLength({ max: 300 })
    .withMessage('Address too long'),

  body('emergencyContact')
    .optional()
    .matches(/^[6-9]\d{9}$/)
    .withMessage('Invalid emergency contact'),
];

export default {
  updateProfileValidator,
};
