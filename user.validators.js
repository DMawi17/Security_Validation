import { body } from "express-validator";

const userValidators = [
    body("email").isEmail().withMessage("isEmail?"),
    body("password").isLength(8).withMessage("Too Short!"),
    // body("password").isStrongPassword().withMessage("Weak pass!"),
];
export default userValidators;
