//It creates a selector function that will be used to compute a value from the state.
import { createSelector } from "reselect";

//It creates a function that selects the shop slice of state.
const selectShop = (state) => state.shop;

/*
1. First, we’re creating a selector function that will be used to get the collections from the store.
2. Next, we’re passing the collections slice of the store to the selector function.
3. Finally, we’re returning the collections slice of the store.
*/
export const selectCollections = createSelector(
	[selectShop],
	(shop) => shop.collections
);

/*
1. First, we’re selecting the collections from the state using the selectCollections selector.
2. Then, we’re mapping over the collections object and returning an array of the collections.
3. Finally, we’re returning the array of collections.
*/
export const selectCollectionsForPreview = createSelector(
	[selectCollections],
	(collections) =>
		collections ? Object.keys(collections).map((key) => collections[key]) : []
);

/*
1. The first argument to createSelector is the array of selectors that will be used to build the new selector.
2. The second argument is the function that will be used to combine the results of the selectors.
3. The third argument is the function that will be used to create the new selector.
*/
export const selectCollection = (collectionUrlParam) =>
	createSelector([selectCollections], (collections) =>
		collections ? collections[collectionUrlParam] : null
	);

/*
1. We’re creating a selector function that takes in the state and returns the shop part of the state.
2. We’re then passing the shop part of the state to the selectShop function.
3. We’re then passing the selectShop function to the createSelector function.
4. The createSelector function returns a new selector function that we’re assigning to the selectIsCollectionFetching variable.
5. The selectIsCollectionFetching function takes in the state and returns the isFetching part of the shop part of the state.
*/
export const selectIsCollectionFetching = createSelector(
	[selectShop],
	(shop) => shop.isFetching
);

/*
1. We’re creating a selector that will return the shop state.
2. We’re creating a selector that will return the shop.collections property from the shop state.
3. We’re creating a selector that will return the value of the shop.collections property.
*/
export const selectIsCollectionsLoaded = createSelector(
	[selectShop],
	(shop) => !!shop.collections
);
