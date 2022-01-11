//It creates a selector function that will be used to compute a value from the state.
import { createSelector } from "reselect";

//It creates a selector that will be used to get the state from the store.
const selectCart = (state) => state.cart;

/*
1. First, we’re selecting the cart state.
2. Then, we’re selecting the cartItems property from the cart state.
3. Finally, we’re returning the cartItems property from the cart state.
*/
export const selectCartItems = createSelector(
	[selectCart],
	(cart) => cart.cartItems
);

/*
1. We’re creating a selector that will return the cart state.
2. We’re creating a selector that will return the cart’s hidden property.
*/
export const selectCartHidden = createSelector(
	[selectCart],
	(cart) => cart.hidden
);

/*
1. First, we’re selecting the cartItems from the state.
2. Next, we’re reducing the cartItems to get the total quantity of all the cartItems.
3. Finally, we’re returning the total quantity.
*/
export const selectCartItemsCount = createSelector(
	[selectCartItems],
	(cartItems) =>
		cartItems.reduce(
			(accumulatedQuantity, cartItem) =>
				accumulatedQuantity + cartItem.quantity,
			0
		)
);
/*
1. We’re creating a selector that takes in the state and returns the cartItems.
2. We’re creating a selector that takes in the cartItems and returns the total.
3. We’re creating a selector that takes in the cartItems and returns the total.
*/

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce(
		(accumulatedQuantity, cartItem) =>
			accumulatedQuantity + cartItem.quantity * cartItem.price,
		0
	)
);
