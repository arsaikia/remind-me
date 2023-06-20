import { fork, all } from 'redux-saga/effects';
import { setThemeWatcher } from './themeSaga'
import { userSignupWatcher } from './userSignupSaga';
import { userLoginWatcher } from './userLoginSaga'
import { getQuestionsWatcher } from './getAllQuestionsSaga';
import { markQuestionAsDoneWatcher } from './markQuestionAsDone';
import { resetAuthSagaWatcher } from './resetAuthSaga';

export default function* rootSaga() {
    yield all([
        fork(userSignupWatcher),
        fork(userLoginWatcher),
        fork(resetAuthSagaWatcher),
        fork(setThemeWatcher),
        fork(getQuestionsWatcher),
        fork(markQuestionAsDoneWatcher),
    ]);
}