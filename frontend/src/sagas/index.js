import { fork, all } from 'redux-saga/effects';
import { setThemeWatcher } from './themeSaga'
import { getQuestionsWatcher } from './getAllQuestionsSaga';

export default function* rootSaga() {
    yield all([
        fork(setThemeWatcher),
        fork(getQuestionsWatcher),
    ]);
}