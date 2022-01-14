/*
1. We’re creating a constant called ShopActionTypes that contains the different types of actions that can be dispatched.
2. We’re creating a constant called FETCH_COLLECTIONS_START that contains the type of action that will be dispatched when the user clicks on the Fetch Collections button.
3. We’re creating a constant called FETCH_COLLECTIONS_SUCCESS that contains the type of action that will be dispatched when the collections are successfully fetched.
4. We’re creating a constant called FETCH_COLLECTIONS_FAILURE that contains the type of action that will be dispatched when the collections fail to be fetched.
*/
const ShopActionTypes = {
	FETCH_COLLECTIONS_START: "FETCH_COLLECTIONS_START",
	FETCH_COLLECTIONS_SUCCESS: "FETCH_COLLECTIONS_SUCCESS",
	FETCH_COLLECTIONS_FAILURE: "FETCH_COLLECTIONS_FAILURE",
};

//It creates a constant called ShopActionTypes and exports it.
export default ShopActionTypes;
