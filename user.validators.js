import { body } from "express-validator";

const userValidators = [
    body("email").isEmail().withMessage("you not serious!"),
    // body("password").isStrongPassword().withMessage("That's poor mate!"),
    body("password").isLength(8).withMessage("That's poor mate!"),
];
export default userValidators;
