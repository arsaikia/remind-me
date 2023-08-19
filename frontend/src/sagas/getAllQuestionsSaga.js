import {
  takeEvery,
  put,
  call,
} from 'redux-saga/effects';

import {
  GET_QUESTIONS,
  GET_ALL_QUESTIONS,
  GET_SOLVED_QUESTIONS,
  GET_TODAY_QUESTIONS,
} from '../actions/types';
import { getQuestions } from '../api/getQuestions';
import groupBy from '../utils/groupBy';
import { getQuestionsToReviseToday } from '../utils/revisionHelper';

// worker Saga
function* fetchAllQuestions(action) {
  const questionsDataResponse = yield call(getQuestions, action.userId);
  const allQuestions = questionsDataResponse?.data?.data;
  const groupedQuestions = groupBy(allQuestions, (question) => question.group);
  const questionsGroupNames = Array.from(groupedQuestions.keys());
  const questionWithGroups = {
    groups: questionsGroupNames,
    questions: Object.fromEntries(groupedQuestions),
  };

  // fire action -> reducer to get all questions
  yield put({
    payload: questionWithGroups,
    type: GET_ALL_QUESTIONS,
  });

  // fire action -> reducer to get only solved questions
  const solvedQuestions = allQuestions.filter((question) => question.solveCount !== 0);
  yield put({
    payload: solvedQuestions,
    type: GET_SOLVED_QUESTIONS,
  });

  // fire action -> reducer to get only today's reminder questions
  const todoQuestions = getQuestionsToReviseToday(solvedQuestions);

  yield put({
    payload: todoQuestions,
    type: GET_TODAY_QUESTIONS,
  });
}

// Watcher Saga
function* getQuestionsWatcher() {
  yield takeEvery(GET_QUESTIONS, fetchAllQuestions);
}

export default getQuestionsWatcher;
