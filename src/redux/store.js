import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";

import rootReducer from "./user/user.reducer";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
