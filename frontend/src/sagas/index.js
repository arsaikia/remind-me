import { fork, all } from 'redux-saga/effects';
import { setThemeWatcher } from './themeSaga'
import { userLoginWatcher } from './userLoginSaga'
import { getQuestionsWatcher } from './getAllQuestionsSaga';
import { markQuestionAsDoneWatcher } from './markQuestionAsDone';

export default function* rootSaga() {
    yield all([
        fork(userLoginWatcher),
        fork(setThemeWatcher),
        fork(getQuestionsWatcher),
        fork(markQuestionAsDoneWatcher),
    ]);
}