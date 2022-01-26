//It combines all the reducers into one reducer.
import { combineReducers } from "redux";

//It imports the redux-persist reducer and the persistReducer function.
import { persistReducer } from "redux-persist";

//It creates a redux store that persists its state to local storage.
import storage from "redux-persist/lib/storage";

//It imports the reducer for the user reducer.
import userReducer from "./user/user.reducer";

//It imports the reducer for the cart.
import cartReducer from "./cart/cart.reducer";

//It imports the directoryReducer and adds it to the rootReducer.
import directoryReducer from "./directory/directory.reducer";

//It imports the reducer from the shop folder and then adds it to the root reducer.
import shopReducer from "./shop/shop.reducer";

/*
1. The `key` is the name of the data that you want to store.
2. The `storage` is the place where you want to store the data.
3. The `whitelist` is the list of data that you want to store.
*/
const persistConfig = {
	key: "root",
	storage,
	whitelist: ["cart"],
};

/*
1. We’re importing the combineReducers function from redux.
2. We’re creating a rootReducer function that will combine all of our other reducers into one.
3. We’re importing the userReducer, cartReducer, directoryReducer, and shopReducer functions from our reducers folder.
4. We’re exporting the rootReducer function.
*/
const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer,
});

//It takes the root reducer and the configuration object and returns a new reducer that persists the state of the root reducer.
export default persistReducer(persistConfig, rootReducer);
