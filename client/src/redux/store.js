//It creates a store that holds the state tree of your application.
import { createStore, applyMiddleware } from "redux";

//It imports the redux-persist library and the persistStore function.
import { persistStore } from "redux-persist"; // allows our store to cache some data

//It creates a middleware that logs actions and state changes to the console.
import logger from "redux-logger";

//It creates a middleware that can be used to run sagas.
import createSagaMiddleware from "redux-saga";

//It imports the rootSaga function from the ./root-saga.js file.
import rootSaga from "./root-saga";

//It imports the root reducer and the store.
import rootReducer from "./root-reducer";

//It creates a middleware that will run the rootSaga when the store is created.
const sagaMiddleware = createSagaMiddleware();

//It creates a middleware that will run the redux-saga middleware.
const middlewares = [sagaMiddleware];

/*
1. If the NODE_ENV environment variable is set to development, then the logger middleware is added to the middleware array.
2. The logger middleware logs the incoming request and the outgoing response.
*/
if (process.env.NODE_ENV === "development") {
	middlewares.push(logger);
}

//It creates a store that holds the state tree.
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

//The above code creates the middleware.
sagaMiddleware.run(rootSaga);

//It creates a Redux store and a Redux persistor.
export const persistor = persistStore(store);

//It creates a store and a persistor.
export default { store, persistor };
