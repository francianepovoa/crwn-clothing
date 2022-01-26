//It creates a selector function that will be used to compute a value from the state.
import { createSelector } from "reselect";

//It creates a selector that will be used to get the user from the state.
const selectUser = (state) => state.user;

/*
1. First, we’re selecting the user state.
2. Then, we’re selecting the currentUser property from the user state.
3. Finally, we’re returning the currentUser property.
*/
export const selectCurrentUser = createSelector(
	[selectUser],
	(user) => user.currentUser
);
