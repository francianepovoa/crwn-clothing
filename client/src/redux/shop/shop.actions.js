//It creates a new constant called ShopActionTypes and assigns it a value of an object.
import ShopActionTypes from "./shop.types";

/*
1. It’s creating a constant called fetchCollectionsStart.
2. It’s returning an action object.
3. The action object has a type of ShopActionTypes.FETCH_COLLECTIONS_START.
4. The action object has an empty object as its payload.
*/
export const fetchCollectionsStart = () => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

//It creates an action that will be dispatched to the store.
export const fetchCollectionsSuccess = (collectionsMap) => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
	payload: collectionsMap,
});

//It creates an action that will be dispatched to the store.
export const fetchCollectionsFailure = (errorMessage) => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
	payload: errorMessage,
});
