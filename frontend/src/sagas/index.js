import { fork, all } from 'redux-saga/effects';
import { setThemeWatcher } from './themeSaga'
import { getQuestionsWatcher } from './getAllQuestionsSaga';
import { markQuestionAsDoneWatcher } from './markQuestionAsDone';

export default function* rootSaga() {
    yield all([
        fork(setThemeWatcher),
        fork(getQuestionsWatcher),
        fork(markQuestionAsDoneWatcher),
    ]);
}