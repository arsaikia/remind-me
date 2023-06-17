import express from 'express';
const router = express.Router();

import {
    getQuestions,
    addQuestion,
} from '../controller/all.js';

router.route('/').get(getQuestions);
router.route('/').post(addQuestion);


// Export the router
export { router as allQuestions };
