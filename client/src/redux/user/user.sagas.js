//It tells the saga to take the action of "FETCH_POSTS" and run the function "fetchPostsSaga" whenever that action is dispatched.
import { takeLatest, put, all, call } from "redux-saga/effects";

/*
It creates a UserActionTypes constant that is an object with a property of LOGIN_START, 
LOGIN_SUCCESS, LOGIN_FAILURE, SIGNOUT_START, SIGNOUT_SUCCESS, SIGNOUT_FAILURE.
*/
import UserActionTypes from "./user.types";

/*
1. We’re importing the actions from the user.actions file.
2. We’re creating a signInSuccess function that takes the user object as a parameter.
3. We’re creating a signInFailure function that takes the error object as a parameter.
4. We’re creating a signOutSuccess function that takes no parameters.
5. We’re creating a signOutFailure function that takes the error object as a parameter.
6. We’re creating a signUpSuccess function that takes the user object as a parameter.
7. We’re creating a signUpFailure function that takes the error object as a parameter.
*/
import {
	signInSuccess,
	signInFailure,
	signOutSuccess,
	signOutFailure,
	signUpSuccess,
	signUpFailure,
} from "./user.actions";

/*
1. Importing the auth and googleProvider from firebase.utils.
2. Creating a new auth instance.
3. Creating a new googleProvider instance.
4. Creating a new createUserProfileDocument function.
5. Creating a new getCurrentUser function.
*/
import {
	auth,
	googleProvider,
	createUserProfileDocument,
	getCurrentUser,
} from "../../firebase/firebase.utils";

/*
1. We’re creating a user profile document in firebase.
2. We’re getting the user’s snapshot.
3. We’re putting the user’s snapshot in the store.
*/
export function* getSnapshotFromUserAuth(userAuth, additionalData) {
	try {
		const userRef = yield call(
			createUserProfileDocument,
			userAuth,
			additionalData
		);
		const userSnapshot = yield userRef.get();
		yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
	} catch (error) {
		yield put(signInFailure(error));
	}
}

/*
1. It first calls the signInWithPopup method on the auth object, which returns a promise.
2. The promise is then yielded to the generator.
3. The generator then waits for the promise to resolve, and then returns the user object.
4. The user object is then passed to the getSnapshotFromUserAuth function, which returns a promise.
5. The promise is then yielded to the generator.
6. The generator then waits for the promise to resolve, and then returns the user object.
7. The user object is then dispatched to the store.
*/
export function* signInWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		yield put(signInFailure(error));
	}
}

/*
1. First, we call the signInWithEmailAndPassword method from the auth service.
2. Then, we call the getSnapshotFromUserAuth method from the user service.
3. Finally, we call the put method from the actions generator.
*/
export function* signInWithEmail({ payload: { email, password } }) {
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		yield put(signInFailure(error));
	}
}

/*
1. First, it calls the getCurrentUser() function to get the userAuth object.
2. If the userAuth object is null, it returns.
3. If the userAuth object is not null, it calls the getSnapshotFromUserAuth() function to get the userAuth snapshot.
4. If the userAuth snapshot is null, it returns.
5. If the userAuth snapshot is not null, it calls the put() function to dispatch the signInSuccess action.
*/
export function* isUserAuthenticated() {
	try {
		const userAuth = yield getCurrentUser();
		if (!userAuth) return;
		yield getSnapshotFromUserAuth(userAuth);
	} catch (error) {
		yield put(signInFailure(error));
	}
}

/*
1. First, we call the signOut() method on the auth object.
2. Then, we call the put() method on the store. This method is used to dispatch an action.
3. The put() method takes an action as a parameter. In this case, we’re dispatching the signOutSuccess() action.
4. Finally, we catch any errors that might occur when signing out.
*/
export function* signOut() {
	try {
		yield auth.signOut();
		yield put(signOutSuccess());
	} catch (error) {
		yield put(signOutFailure(error));
	}
}

/*
1. First, we call the auth.createUserWithEmailAndPassword() method to create a new user with the given email and password.
2. Then, we call the put() method to dispatch the signUpSuccess action, passing in the user object returned by the auth.createUserWithEmailAndPassword() method.
3. Finally, we call the put() method to dispatch the signUpFailure action, passing in the error object returned by the auth.createUserWithEmailAndPassword() method.
*/
export function* signUp({ payload: { email, password, displayName } }) {
	try {
		const { user } = yield auth.createUserWithEmailAndPassword(email, password);
		yield put(signUpSuccess({ user, additionalData: { displayName } }));
	} catch (error) {
		yield put(signUpFailure(error));
	}
}
/*
1. We’re using the `getSnapshotFromUserAuth` function to get the user’s data from the database.
2. We’re using the `yield` keyword to call the function and wait for the result.
3. We’re using the `yield put` keyword to dispatch an action to the store.
*/

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
	yield getSnapshotFromUserAuth(user, additionalData);
}

/*
1. It first takes the action of type UserActionTypes.GOOGLE_SIGN_IN_START.
2. It then calls the takeLatest method on the generator function.
3. The takeLatest method takes the action type and the function to call when the action is dispatched.
4. It then calls the signInWithGoogle function.
5. The signInWithGoogle function is a function that we’ll create in the next step.
*/
export function* onGoogleSignInStart() {
	yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

/*
1. It first takes the action of type EMAIL_SIGN_IN_START.
2. It then calls the signInWithEmail function, which is a generator function.
3. It then yields the result of the signInWithEmail function.
4. It then takes the action of type EMAIL_SIGN_IN_SUCCESS or EMAIL_SIGN_IN_FAILURE.
5. It then passes the result of the signInWithEmail function to the reducer.
*/
export function* onEmailSignInStart() {
	yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

/*
1. It’s taking the action of type CHECK_USER_SESSION and passing it to the isUserAuthenticated function.
2. It’s taking the result of the isUserAuthenticated function and passing it to the takeLatest function.
3. The takeLatest function is listening for the result of the isUserAuthenticated function.
4. If the result of the isUserAuthenticated function is truthy, it will dispatch the action of type LOGIN_USER.
5. If the result of the isUserAuthenticated function is falsy, it will dispatch the action of type LOGOUT_USER.
*/
export function* onCheckUserSession() {
	yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

//It tells the saga to take the SIGN_OUT_START action and run the signOut function whenever that action is dispatched.
export function* onSignOutStart() {
	yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

/*
1. It first takes the action of type SIGN_UP_START.
2. It then calls the signUp function, which is defined in the user.actions.js file.
3. It then takes the action of type SIGN_UP_SUCCESS or SIGN_UP_FAILURE.
4. It then passes the action to the reducer, which is defined in the user.reducer.js file.
*/
export function* onSignUpStart() {
	yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

/*
1. It first takes the action of type SIGN_UP_SUCCESS.
2. It then takes the action of type SIGN_IN_AFTER_SIGN_UP.
3. It then dispatches the action of type SIGN_IN_SUCCESS.
*/
export function* onSignUpSuccess() {
	yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

/*
1. The first function, onGoogleSignInStart, is called when the user clicks the Google Sign In button.
2. The second function, onEmailSignInStart, is called when the user clicks the Email Sign In button.
3. The third function, onCheckUserSession, is called when the app is loaded.
4. The fourth function, onSignOutStart, is called when the user clicks the Sign Out button.
5. The fifth function, onSignUpStart, is called when the user clicks the Sign Up button.
6. The sixth function, onSignUpSuccess, is called when the user successfully signs up.
*/
export function* userSagas() {
	yield all([
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
		call(onCheckUserSession),
		call(onSignOutStart),
		call(onSignUpStart),
		call(onSignUpSuccess),
	]);
}
