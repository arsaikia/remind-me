import { LOGIN_SUCCESS } from '../actions/types'

const initialState = {
    isAuthenticated: false,
    userId: 'guest',
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: action.payload?.isAuthenticated,
                userId: action.payload?.userId,
            }

        default:
            return {
                ...state
            }
    }
}

export default authReducer;