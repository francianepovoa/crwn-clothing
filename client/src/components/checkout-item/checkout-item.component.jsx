//It imports the React library.
import React from "react";

//It connects the component to the Redux store.
import { connect } from "react-redux";

/*
1. Importing the React library
2. Importing the connect function from react-redux
3. Importing the addItem, removeItem, and clearItemFromCart functions from the cart.actions file
4. Defining the CheckoutItem component
5. Defining the mapDispatchToProps function
6. Defining the CheckoutItem component’s mapDispatchToProps object
7. Defining the CheckoutItem component’s mapStateToProps function
8. Defining the CheckoutItem component’s mapStateToProps object
9. Exporting the CheckoutItem component
*/
import {
	clearItemFromCart,
	addItem,
	removeItem,
} from "../../redux/cart/cart.actions";

//This is the code that renders the checkout-item component.
import "./checkout-item.styles.scss";

/*
1. We’re destructuring the cartItem object and extracting the name, imageUrl, price, and quantity properties.
2. We’re creating a div with the className checkout-item.
3. We’re creating a div with the className image-container.
4. We’re creating a img element with the src attribute set to the imageUrl property.
5. We’re creating a span with the className name.
6. We’re creating a span with the className quantity.
7. We’re creating a div with the className arrow.
8. We’re creating a span with the className value.
9. We’re creating a div with the className arrow.
10. We’re creating a span with the className price.
11. We’re creating a div with the className remove-button.
12. We’re creating a function that will clear the item from the cart.
*/
const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={imageUrl} alt='item' />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<div className='arrow' onClick={() => removeItem(cartItem)}>
					&#10094;
				</div>
				<span className='value'>{quantity}</span>
				<div className='arrow' onClick={() => addItem(cartItem)}>
					&#10095;
				</div>
			</span>
			<span className='price'>{price}</span>
			<div className='remove-button' onClick={() => clearItem(cartItem)}>
				&#10005;
			</div>
		</div>
	);
};

//It maps the dispatch function to the props of the component.
const mapDispatchToProps = (dispatch) => ({
	clearItem: (item) => dispatch(clearItemFromCart(item)),
	addItem: (item) => dispatch(addItem(item)),
	removeItem: (item) => dispatch(removeItem(item)),
});

//It connects the CheckoutItem component to the Redux store.
export default connect(null, mapDispatchToProps)(CheckoutItem);
