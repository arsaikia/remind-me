import User from '../models/User.js';
import asyncHandler from '../middleware/async.js';
import ErrorResponse from '../middleware/error.js';
import { v4 as uuid } from 'uuid';

/*
 * @desc     Sign Up a user
 * @route    POST /api/v1/authentication/signup
 * @access   Public
 */

const signupUser = asyncHandler(async (req, res, next) => {

    const { firstName, lastName, email, password } = req.body;

    // Check if user already exists
    const userExists = await User.exists({ email });

    if (userExists) {
        return next(new Error(`User already exists. Please sign in`, 409));
    }

    // create new user
    const user = await User.create({
        firstName,
        lastName,
        email,
        password,
    });

    if (!user) {
        return next(new Error(`Signup error`, 400));
    }

    res.status(200).json({ success: true, data: { userId: user._id } });
});

/*
 * @desc     Sign In a user
 * @route    POST /api/v1/signin
 * @access   Public
 */

const signInUser = asyncHandler(async (req, res, next) => {

    try {
        const user = await User.findOne({ email: req.body.email });
        const isCorrectPassword = await user?.validatePassword(req.body.password);
        if (isCorrectPassword) {
            return res.status(200).json({
                success: true,
                data: {
                    userId: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                }
            });
        }
        return next(new Error(`Incorrect credentials`, 400));
    } catch (error) {
        console.log(error);
        return next(new Error(`Incorrect credentials : ${error}`, 400));
    }
});

export {
    signupUser,
    signInUser,
};
