import { GET_QUESTIONS_SUCCESS } from "../actions/types"



const initialState = {
    questions: [],
}


const questionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_QUESTIONS_SUCCESS:
            return {
                ...state,
                questions: action.payload,
            }
        
         default:
            return {
                ...state
            }
            
    }
}

export default questionReducer;