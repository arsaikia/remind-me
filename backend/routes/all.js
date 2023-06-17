import express from 'express';
const router = express.Router();

import {
    getQuestions,
    addQuestion,
    updateSolveCount,
} from '../controller/all.js';

router.route('/').get(getQuestions);
router.route('/').post(addQuestion);
router.route('/updatesolvecount').post(updateSolveCount);


// Export the router
export { router as allQuestions };
