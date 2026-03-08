import { body } from "express-validator";

const createQueryValidation = [

  // Full Name
  body("fullname")
    .trim()
    .notEmpty()
    .withMessage("Full name is required")
    .isLength({ min: 3, max: 40 })
    .withMessage("Full name must be between 3 and 40 characters"),

  // Email (optional but must be valid)
  body("email")
    .optional({ checkFalsy: true })
    .trim()
    .isEmail()
    .withMessage("Invalid email address"),

  // Phone (required Indian phone)
  body("phone")
    .trim()
    .notEmpty()
    .withMessage("Phone number is required")
    .isMobilePhone("en-IN")
    .withMessage("Invalid Indian phone number"),

  // College Name (optional)
  body("collegeName")
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage("College name must be between 2 and 100 characters"),

  // Message (optional)
  body("message")
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ min: 5, max: 300 })
    .withMessage("Message must be between 5 and 300 characters"),
];

export default {
    createQueryValidation
}