/*
1. We’re creating a constant called CartActionTypes that will hold all of our action types for our cart reducer.
2. We’re creating a constant called TOGGLE_CART_HIDDEN that will hold the action type for when we want to toggle the cart dropdown.
3. We’re creating a constant called ADD_ITEM that will hold the action type for when we want to add an item to our cart.
4. We’re creating a constant called REMOVE_ITEM that will hold the action type for when we want to remove an item from our cart.
5. We’re creating a constant called CLEAR_ITEM_FROM_CART that will hold the action type for when we want to remove an item from our cart.
6. We’re creating a constant called CLEAR_CART that will hold the action type for when we want to remove all items from our cart.
*/
const CartActionTypes = {
	TOGGLE_CART_HIDDEN: "TOGGLE_CART_HIDDEN",
	ADD_ITEM: "ADD_ITEM",
	REMOVE_ITEM: "REMOVE_ITEM",
	CLEAR_ITEM_FROM_CART: "CLEAR_ITEM_FROM_CART",
	CLEAR_CART: "CLEAR_CART",
};

//It creates a constant called CartActionTypes and exports it.
export default CartActionTypes;
