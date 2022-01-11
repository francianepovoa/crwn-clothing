//It creates a new constant called CartActionTypes and assigns it a value of an object.
import CartActionTypes from "./cart.types";

/*
1. We’re creating a constant called toggleCartHidden that returns an object with a type of TOGGLE_CART_HIDDEN.
2. We’re exporting the constant so that we can use it in our reducer and our action creators.
3. We’re creating a function called toggleCartHidden that returns an object with a type of TOGGLE_CART_HIDDEN.
4. We’re exporting the function so that we can use it in our reducer and our action creators.
*/
export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

/*
1. First, we declare a constant called addItem and set it equal to an object literal.
2. The object literal has a type property that is set to CartActionTypes.ADD_ITEM.
3. The object literal has a payload property that is set to item.
4. Finally, we return the object literal.
*/
export const addItem = (item) => ({
	type: CartActionTypes.ADD_ITEM,
	payload: item,
});

/*
1. First, we declare a constant called removeItem and set its value to an object.
2. The object has a type property whose value is CartActionTypes.REMOVE_ITEM.
3. The object has a payload property whose value is the item we want to remove.
*/
export const removeItem = (item) => ({
	type: CartActionTypes.REMOVE_ITEM,
	payload: item,
});

/*
1. First, we declare a constant called clearItemFromCart and set it equal to an object with a type of CartActionTypes.CLEAR_ITEM_FROM_CART.
2. Next, we declare a payload property and set it equal to the item we want to remove.
3. Finally, we return the object we just created.
*/
export const clearItemFromCart = (item) => ({
	type: CartActionTypes.CLEAR_ITEM_FROM_CART,
	payload: item,
});

/*
1. It’s creating a constant called clearCart that returns an object with a type of CartActionTypes.CLEAR_CART.
2. It’s exporting that constant so that other parts of the application can import it and use it.
3. It’s creating a function called clearCart that returns an object with a type of CartActionTypes.CLEAR_CART.
4. It’s exporting that function so that other parts of the application can import it and use it.
*/
export const clearCart = () => ({
	type: CartActionTypes.CLEAR_CART,
});
