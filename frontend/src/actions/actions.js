import { GET_QUESTIONS, MARK_QUESTION_AS_DONE, UPDATE_THEME } from "./types"

export const getQuestions = () => {
    return { type: GET_QUESTIONS };
}

export const updateTheme = (value) => {
    return { type: UPDATE_THEME, payload: value };
}

export const markQuestionAsDone = (id) => {
    return { type: MARK_QUESTION_AS_DONE, payload: id };
}