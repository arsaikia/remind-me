import {
    takeEvery,
    put,
    call,
} from "redux-saga/effects";
import {
    SIGNUP,
    SIGNUP_SUCCESS,
} from "../actions/types";
import { signup } from "../api/signup";

// worker Saga
function* signupHandler(action) {
    const questionsDataResponse = yield call(signup, action.payload);
    console.log("SIGNUP_SUCCESS");
    yield put({
        type: SIGNUP_SUCCESS,
        payload: {
            isSignedUp: questionsDataResponse.status === 200,
        }
    })

    console.log(questionsDataResponse);
}

function* userSignupWatcher() {
  yield takeEvery(SIGNUP, signupHandler)
}

export {
    userSignupWatcher,
};