import {
    takeEvery,
    put,
    call,
} from "redux-saga/effects"
import { GET_QUESTIONS, GET_QUESTIONS_SUCCESS } from "../actions/types"
import { getQuestions } from "../api/getQuestions";

// worker Saga
function* fetchAllQuestions(action) {

    const questionsData = yield call(getQuestions);

    yield put({
        type: GET_QUESTIONS_SUCCESS,
        payload: questionsData?.data?.data,
    })
    
}

// Watcher Saga
function* getQuestionsWatcher() {
  yield takeEvery(GET_QUESTIONS, fetchAllQuestions)
}

export {
    getQuestionsWatcher,
};