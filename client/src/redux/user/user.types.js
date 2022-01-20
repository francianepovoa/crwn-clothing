/*
1. We’re creating a constant called UserActionTypes and assigning it a value of an object.
2. We’re creating a constant called SET_CURRENT_USER and assigning it a value of a string.
3. We’re creating a constant called GOOGLE_SIGN_IN_START and assigning it a value of a string.
4. We’re creating a constant called EMAIL_SIGN_IN_START and assigning it a value of a string.
5. We’re creating a constant called SIGN_IN_SUCCESS and assigning it a value of a string.
6. We’re creating a constant called SIGN_IN_FAILURE and assigning it a value of a string.
7. We’re creating a constant called CHECK_USER_SESSION and assigning it a value of a string.
8. We’re creating a constant called SIGN_OUT_START and assigning it a value of a string.
9. We’re creating a constant called SIGN_OUT_SUCCESS and assigning it a value of a string.
10. We’re creating a constant called SIGN_OUT_FAILURE and assigning it a value of a string.
11. We’re creating a constant called SIGN_UP_START and assigning it a value of a string.
12. We’re creating a constant called SIGN_UP_SUCCESS and assigning it a value of a string.
13. We’re creating a constant called SIGN_UP_FAILURE and assigning it a value of a string.
*/
const UserActionTypes = {
	SET_CURRENT_USER: "SET_CURRENT_USER",
	GOOGLE_SIGN_IN_START: "GOOGLE_SIGN_IN_START",
	EMAIL_SIGN_IN_START: "EMAIL_SIGN_IN_START",
	SIGN_IN_SUCCESS: "SIGN_IN_SUCCESS",
	SIGN_IN_FAILURE: "SIGN_IN_FAILURE",
	CHECK_USER_SESSION: "CHECK_USER_SESSION",
	SIGN_OUT_START: "SIGN_OUT_START",
	SIGN_OUT_SUCCESS: "SIGN_OUT_SUCCESS",
	SIGN_OUT_FAILURE: "SIGN_OUT_FAILURE",
	SIGN_UP_START: "SIGN_UP_START",
	SIGN_UP_SUCCESS: "SIGN_UP_SUCCESS",
	SIGN_UP_FAILURE: "SIGN_UP_FAILURE",
};

//It creates a constant called UserActionTypes and exports it.
export default UserActionTypes;
