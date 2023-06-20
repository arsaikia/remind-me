import { LOGIN_SUCCESS, SIGNUP_SUCCESS } from '../actions/types'

const initialState = {
    isSignedUp: false,
    isAuthenticated: false,
    userId: 'guest',
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isSignedUp: action.payload?.isSignedUp,
            }

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