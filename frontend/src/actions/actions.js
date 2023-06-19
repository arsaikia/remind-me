import { GET_QUESTIONS, LOGIN, MARK_QUESTION_AS_DONE, UPDATE_THEME } from "./types"

export const getQuestions = (value) => {
    return { type: GET_QUESTIONS, userId: value };
}

export const updateTheme = (value) => {
    return { type: UPDATE_THEME, payload: value };
}

export const markQuestionAsDone = (id) => {
    return { type: MARK_QUESTION_AS_DONE, payload: id };
}

export const userLogin = (value) => {
    return { type: LOGIN, payload: value };
}