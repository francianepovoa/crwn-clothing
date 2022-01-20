//It creates a UserActionTypes constant that we can use to access our action types.
import UserActionTypes from "./user.types";

/*
1. First, we’re setting the initial state of our application.
2. Next, we’re creating a function called reducer that takes in the action and the current state of the application.
3. Then, we’re setting the currentUser property of the state to the user property of the action.
4. Finally, we’re returning the new state.
*/
const INITIAL_STATE = {
	currentUser: null,
	error: null,
};

/*
1. We’re creating a reducer function that takes the current state and an action as arguments.
2. We’re using a switch statement to determine what action has been dispatched.
3. We’re returning a new state depending on the action type.
*/
const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/*
		1. We’re creating a new object called currentUser and assigning it the value of the payload.
		2. We’re setting the error property to null.
		3. We’re returning the new object.
		*/
		case UserActionTypes.SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				error: null,
			};
		/*
		1. We’re using the spread operator to return a new object.
		2. We’re setting the currentUser property to null.
		3. We’re setting the error property to null.
		*/
		case UserActionTypes.SIGN_OUT_SUCCESS:
			return {
				...state,
				currentUser: null,
				error: null,
			};
		/*
		1. We’re using the switch statement to check the action type.
		2. If the action type is SIGN_IN_SUCCESS, we’re returning the state with the user and the error being null.
		3. If the action type is SIGN_IN_FAILURE, we’re returning the state with the user being null and the error being the payload.
		4. If the action type is SIGN_OUT_SUCCESS, we’re returning the state with the user being null and the error being null.
		5. If the action type is SIGN_OUT_FAILURE, we’re returning the state with the user being null and the error being the payload.
		6. If the action type is SIGN_UP_SUCCESS, we’re returning the state with the user and the error being null.
		7. If the action type is SIGN_UP_FAILURE, we’re returning the state with the user being null and the error being the payload.
		8. If the action type is anything else, we’re returning the state with the user and the error being null.
		*/
		case UserActionTypes.SIGN_IN_FAILURE:
		case UserActionTypes.SIGN_OUT_FAILURE:
		case UserActionTypes.SIGN_UP_FAILURE:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};

//It creates a reducer that will be used to update the state of the user reducer.
export default userReducer;
