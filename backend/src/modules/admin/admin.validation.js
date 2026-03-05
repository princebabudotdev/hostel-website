import { param , query } from "express-validator";
import mongoose from "mongoose";

const validateUserIdParam = [
  param("userId")
    .notEmpty()
    .withMessage("User ID is required")
    .isLength({ min: 24, max: 24 })
    .withMessage("User ID must be 24 characters")
    .custom((value) => mongoose.Types.ObjectId.isValid(value))
    .withMessage("Invalid user ID"),
];

const validateUserPagination = [
  query("page")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Page must be a number greater than 0"),

  query("limit")
    .optional()
    .isInt({ min: 1, max: 50 })
    .withMessage("Limit must be between 1 and 50"),
];

export default {
  validateUserIdParam,
  validateUserPagination
};