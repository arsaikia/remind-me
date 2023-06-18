import Question from '../models/Question.js';
import asyncHandler from '../middleware/async.js';
import ErrorResponse from '../middleware/error.js';
import { v4 as uuid } from 'uuid';

/*
 * @desc     Get All Questions
 * @route    GET /api/v1/questions
 * @access   Public
 */

const getQuestions = asyncHandler(async (req, res, next) => {
    const questions = await Question.find();

    if (!questions) {
        return next(new ErrorResponse(`No Question found!`, 404));
    }
    res.status(200).json({ success: true, data: questions });
});

/*
 * @desc     Add a question
 * @route    POST /api/v1/question
 * @access   Public
 */

const addQuestion = asyncHandler(async (req, res, next) => {
    const question = await Question.create(req.body);

    res.status(201).json({
        success: true,
        data: question,
    });
});

/*
 * @desc     mark a question as complete
 * @route    POST /api/v1/question
 * @access   Public
 */

const updateSolveCount = asyncHandler(async (req, res, next) => {
    const oldQuestion = await Question.findById(req.query.id);
    const question = await Question.findByIdAndUpdate(
        req.query.id,
        {
            solveCount: oldQuestion.solveCount + 1,
            lastUpdatedAt: new Date(),
        },
        {
            new: true
        }
    );

    if (!question) {
        return next(new ErrorResponse(`Data Insertion Error!`, 500));
    }
    res.status(201).json({ success: true, data: question });
});

export {
    getQuestions,
    addQuestion,
    updateSolveCount,
};
