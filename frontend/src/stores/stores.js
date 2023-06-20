import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";
import themeReducer from '../reducers/themeReducer';
import questionReducer from '../reducers/questionsReducer';
import authReducer from '../reducers/authReducer';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        auth: authReducer,
        theme: themeReducer,
        questions: questionReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

// then run the saga
sagaMiddleware.run(rootSaga)

export default store;