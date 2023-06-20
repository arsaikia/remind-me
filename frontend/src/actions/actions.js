import { GET_QUESTIONS, LOGIN, MARK_QUESTION_AS_DONE, RESET_AUTH, SIGNUP, UPDATE_THEME } from "./types"

export const getQuestions = (value) => {
    return { type: GET_QUESTIONS, userId: value };
}

export const updateTheme = (value) => {
    return { type: UPDATE_THEME, payload: value };
}

export const markQuestionAsDone = (value) => {
    return { type: MARK_QUESTION_AS_DONE, payload: value };
}

export const userLogin = (value) => {
    return { type: LOGIN, payload: value };
}

export const userSignup = (value) => {
    return { type: SIGNUP, payload: value };
}

export const resetAuthState = () => {
    return { type: RESET_AUTH };
}