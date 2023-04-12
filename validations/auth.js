import { body } from 'express-validator'

export const registerValidation = [
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
    body("fullName").isLength({ min: 3 }),
];

export const blogValidation = [
    body("title").isLength({ min: 3 }),
    body("tag").isLength({ min: 3 }),
    body("text").isLength({ min: 3 }),
    body("mainText").isLength({ min: 10 }),
    body("secondText").isLength({ min: 10 }),
];
export const projectValidation = [
    body("projectid").isLength({ min: 3 }),
    body("title").isLength({ min: 3 }),
    body("tag").isLength({ min: 3 }),
    body("client").isLength({ min: 3 }),
    body("category").isLength({ min: 3 }),
    body("tags").isLength({ min: 3 }),
    body("link").isURL(),
    body("mainTitle").isLength({ min: 10 }),
    body("mainText").isLength({ min: 10 }),
];