import { body } from 'express-validator';

const createHostelValidation = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Hostel name is required')
    .isLength({ min: 3, max: 100 })
    .withMessage('Hostel name must be between 3 and 100 characters'),

  body('description')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Description cannot exceed 500 characters'),

  body('ownerName')
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Owner name must be between 2 and 50 characters'),

  body('contact.phone')
    .notEmpty()
    .withMessage('Phone number is required')
    .isMobilePhone('en-IN')
    .withMessage('Invalid Indian phone number'),

  body('contact.email').optional().isEmail().withMessage('Invalid email address'),

  body('contact.whatsapp').optional().isMobilePhone('en-IN').withMessage('Invalid WhatsApp number'),

  body('address.street').optional().trim(),

  body('address.area').optional().trim(),

  body('address.city').notEmpty().withMessage('City is required'),

  body('address.state').notEmpty().withMessage('State is required'),

  body('address.pincode').optional().isPostalCode('IN').withMessage('Invalid Indian pincode'),

  body('address.country').optional().isString(),

  body('location.googleMapLink').optional().isURL().withMessage('Invalid Google map link'),

  body('location.latitude').optional().isFloat().withMessage('Latitude must be a number'),

  body('location.longitude').optional().isFloat().withMessage('Longitude must be a number'),

  body('images').optional().isArray().withMessage('Images must be an array'),

  body('images.*').optional().isURL().withMessage('Each image must be a valid URL'),

  body('facilities').optional().isArray().withMessage('Facilities must be an array'),

  body('facilities.*').optional().isString().trim(),

  body('rules').optional().isArray().withMessage('Rules must be an array'),

  body('rules.*').optional().isString().trim(),

  body('foodAvailable').optional().isBoolean().withMessage('foodAvailable must be true or false'),

  body('genderAllowed')
    .optional()
    .isIn(['boys', 'girls', 'both'])
    .withMessage('genderAllowed must be boys, girls, or both'),

  body('totalRooms')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Total rooms must be a positive number'),

  body('website').optional().isURL().withMessage('Invalid website URL'),

  body('isActive').optional().isBoolean().withMessage('isActive must be true or false'),
];

const updateHostelValidation = [

  body("name")
    .optional()
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage("Hostel name must be between 3 and 100 characters"),

  body("description")
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage("Description cannot exceed 500 characters"),

  body("ownerName")
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("Owner name must be between 2 and 50 characters"),

  body("contact.phone")
    .optional()
    .isMobilePhone("en-IN")
    .withMessage("Invalid Indian phone number"),

  body("contact.email")
    .optional()
    .isEmail()
    .withMessage("Invalid email address"),

  body("contact.whatsapp")
    .optional()
    .isMobilePhone("en-IN")
    .withMessage("Invalid WhatsApp number"),

  body("address.street")
    .optional()
    .trim(),

  body("address.area")
    .optional()
    .trim(),

  body("address.city")
    .optional()
    .trim(),

  body("address.state")
    .optional()
    .trim(),

  body("address.pincode")
    .optional()
    .isPostalCode("IN")
    .withMessage("Invalid Indian pincode"),

  body("address.country")
    .optional()
    .trim(),

  body("location.googleMapLink")
    .optional()
    .isURL()
    .withMessage("Invalid Google map link"),

  body("location.latitude")
    .optional()
    .isFloat()
    .withMessage("Latitude must be a number"),

  body("location.longitude")
    .optional()
    .isFloat()
    .withMessage("Longitude must be a number"),

  body("images")
    .optional()
    .isArray()
    .withMessage("Images must be an array"),

  body("images.*")
    .optional()
    .isString()
    .withMessage("Each image must be a string URL"),

  body("facilities")
    .optional()
    .isArray()
    .withMessage("Facilities must be an array"),

  body("facilities.*")
    .optional()
    .isString()
    .trim(),

  body("rules")
    .optional()
    .isArray()
    .withMessage("Rules must be an array"),

  body("rules.*")
    .optional()
    .isString()
    .trim(),

  body("foodAvailable")
    .optional()
    .isBoolean()
    .withMessage("foodAvailable must be true or false"),

  body("genderAllowed")
    .optional()
    .isIn(["boys", "girls", "both"])
    .withMessage("genderAllowed must be boys, girls, or both"),

  body("totalRooms")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Total rooms must be a positive number"),

  body("website")
    .optional()
    .isURL()
    .withMessage("Invalid website URL"),

  body("isActive")
    .optional()
    .isBoolean()
    .withMessage("isActive must be true or false")
];


export default {
  createHostelValidation,
  updateHostelValidation
};
