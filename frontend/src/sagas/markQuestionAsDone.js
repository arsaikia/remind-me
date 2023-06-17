import {
    takeEvery,
    put,
    call,
} from "redux-saga/effects"
import {
    MARK_QUESTION_AS_DONE,
    SET_DARK_MODE,
    SET_LIGHT_MODE,
    UPDATE_THEME,
} from "../actions/types"
import { setQuestionAsDone } from "../api/setQuestionAsDone";
import { getQuestions } from "../actions/actions";

// worker Saga
function* handleQuestionDone(action) {
    
    try {
        yield call(setQuestionAsDone(action.payload));
        yield put(getQuestions());
    } catch (error) {
        console.log("Error: ", action);
    }
}

function* markQuestionAsDoneWatcher() {
  yield takeEvery(MARK_QUESTION_AS_DONE, handleQuestionDone)
}

export {
    markQuestionAsDoneWatcher,
};