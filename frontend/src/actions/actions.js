import { GET_QUESTIONS, SET_QUESTION, UPDATE_THEME } from "./types"

export const getQuestions = () => {
    return { type: GET_QUESTIONS };
}

export const updateTheme = (value) => {
    return { type: UPDATE_THEME, payload: value };
}