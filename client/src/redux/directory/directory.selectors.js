//It creates a selector function that will be used to compute a value from the state.
import { createSelector } from "reselect";

//It creates a selector that will return the directory state.
const selectDirectory = (state) => state.directory;

/*
1. The first argument to createSelector is the list of selectors to invoke.
2. The second argument is the function that will be invoked with the return values of each selector.
3. The return value of createSelector is a new selector.
*/
export const selectDirectorySections = createSelector(
	[selectDirectory],
	(directory) => directory.sections
);
