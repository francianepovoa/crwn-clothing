import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";

import rootReducer from "./user/user.reducer";

const middlewares = [logger];

//Setting up store
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
