import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";

//Setting up root
export default combineReducers({
	user: userReducer,
});
