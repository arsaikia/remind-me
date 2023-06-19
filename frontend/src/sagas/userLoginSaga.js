import {
    takeEvery,
    put,
    call,
} from "redux-saga/effects";
import {
    LOGIN, LOGIN_SUCCESS,
} from "../actions/types";
import { login } from "../api/login";
import { useCookies } from 'react-cookie';

// worker Saga
function* loginHandler(action) {
    const questionsDataResponse = yield call(login, action.payload);
    yield put({
        type: LOGIN_SUCCESS,
        payload: {
            isAuthenticated: questionsDataResponse.status === 200,
            userId: questionsDataResponse?.data?.data.userId,
        }
    })

    console.log(questionsDataResponse);
}

function* userLoginWatcher() {
  yield takeEvery(LOGIN, loginHandler)
}

export {
    userLoginWatcher,
};