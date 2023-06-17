import {
    GET_ALL_QUESTIONS,
    GET_SOLVED_QUESTIONS,
    GET_TODAY_QUESTIONS,
} from "../actions/types"

const initialState = {
    allQuestions: {
        groups: [],
        questions: {},
    },
    solvedQuestions: [],
    todoQuestions: [],
}

const questionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_QUESTIONS:
            return {
                ...state,
                allQuestions: action.payload,
            }
        
        case GET_SOLVED_QUESTIONS:
            return {
                ...state,
                solvedQuestions: action.payload,
            }
        
        case GET_TODAY_QUESTIONS:
            return {
                ...state,
                todoQuestions: action.payload,
            }
        
         default:
            return {
                ...state
            }
            
    }
}

export default questionReducer;