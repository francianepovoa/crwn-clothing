//It creates a UserActionTypes constant that we can use to access our action types.
import UserActionTypes from "./user.types";

/*
1. We’re creating a constant called googleSignInStart.
2. We’re creating an action creator called googleSignInStart.
3. We’re returning an action object.
*/
export const googleSignInStart = () => ({
	type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

/*
1. It creates an action object with a type of `UserActionTypes.EMAIL_SIGN_IN_START`.
2. It then passes the email and password as the payload.
3. Finally, it returns the action object.
*/
export const emailSignInStart = (emailAndPassword) => ({
	type: UserActionTypes.EMAIL_SIGN_IN_START,
	payload: emailAndPassword,
});

/*
1. It defines a constant called signInSuccess and passes in the user object.
2. It returns an action object with a type of SIGN_IN_SUCCESS and a payload of the user object.
*/
export const signInSuccess = (user) => ({
	type: UserActionTypes.SIGN_IN_SUCCESS,
	payload: user,
});

/*
1. It defines a constant called signInFailure and passes in an object with a type of UserActionTypes.SIGN_IN_FAILURE and a payload of error.
2. It returns the object.
3. It exports the object.
*/
export const signInFailure = (error) => ({
	type: UserActionTypes.SIGN_IN_FAILURE,
	payload: error,
});

/*
1. It first checks if the user is logged in.
2. If the user is logged in, it will dispatch the checkUserSession action.
3. If the user is not logged in, it will redirect the user to the login page.
*/
export const checkUserSession = () => ({
	type: UserActionTypes.CHECK_USER_SESSION,
});

/*
1. It’s creating a constant called signOutStart.
2. It’s returning an object with a type of SIGN_OUT_START.
3. It’s exporting the constant.
*/
export const signOutStart = () => ({
	type: UserActionTypes.SIGN_OUT_START,
});

/*
1. It’s creating a constant called signOutSuccess.
2. It’s returning an object with a type of SIGN_OUT_SUCCESS.
3. It’s returning an object with a type of SIGN_OUT_SUCCESS.
*/
export const signOutSuccess = () => ({
	type: UserActionTypes.SIGN_OUT_SUCCESS,
});

/*
1. It defines a constant called signOutSuccess and assigns it the value of the action object that is returned by the signOut() action creator.
2. It defines a constant called signOutFailure and assigns it the value of the action object that is returned by the signOut() action creator.
3. It returns an object that contains the two constants.
*/
export const signOutFailure = (error) => ({
	type: UserActionTypes.SIGN_OUT_FAILURE,
	payload: error,
});

/*
1. It’s creating a new action of type SIGN_UP_START.
2. It’s passing the userCredentials object as the payload.
3. It’s returning the action object.
*/
export const signUpStart = (userCredentials) => ({
	type: UserActionTypes.SIGN_UP_START,
	payload: userCredentials,
});

/*
1. It’s creating a constant called signUpSuccess.
2. It’s passing in the user and additionalData as the payload.
3. It’s returning the action object.
*/
export const signUpSuccess = ({ user, additionalData }) => ({
	type: UserActionTypes.SIGN_UP_SUCCESS,
	payload: { user, additionalData },
});

/*
1. It defines a constant called signUpSuccess and assigns it the value of the action object that is returned by the signUpSuccess action creator.
2. It defines a constant called signUpFailure and assigns it the value of the action object that is returned by the signUpFailure action creator.
3. It returns an object that contains the two constants.
*/
export const signUpFailure = (error) => ({
	type: UserActionTypes.SIGN_UP_FAILURE,
	payload: error,
});
