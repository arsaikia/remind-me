import Question from '../models/Question.js';
import asyncHandler from '../middleware/async.js';
import ErrorResponse from '../middleware/error.js';
import { v4 as uuid } from 'uuid';
import SolveHistory from '../models/SolveHistory.js';

/*
 * @desc     Get All Questions
 * @route    GET /api/v1/questions/?userId
 * @access   Public
 */

const getQuestions = asyncHandler(async (req, res, next) => {
    const { userId } = req.params;
    const questions = await Question.find({});
    const solveCountForUser = (userId === 'guest')
        ? SolveHistory.find()
        : await SolveHistory.find({ userId });

    const solveCountForUserMap = {};
    for (let idx = 0; idx < solveCountForUser.length; idx++) {
        const solvedQuestion = solveCountForUser[idx];
        const questionId = solvedQuestion.questionId;
        solveCountForUserMap[questionId] = solvedQuestion;
    }

    const questionsWithSolveCount = [];
    for (let idx = 0; idx < questions.length; idx++) {
        const question = questions[idx];
        const { _id: questionId } = question;
        const solvedQuestion = solveCountForUserMap[questionId] || { solveCount: 0, lastUpdatedAt: '    Unsolved' };

        questionsWithSolveCount.push({
            _id: question._id,
            name: question.name,
            link: question.link,
            group: question.group,
            list: question.list,
            difficulty: question.difficulty,
            solveCount: solvedQuestion.solveCount,
            lastUpdatedAt: solvedQuestion.lastUpdatedAt.toString().slice(4, 15),
            userId,
        });
    }

    return res.status(200).json({ success: true, data: questionsWithSolveCount });
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
