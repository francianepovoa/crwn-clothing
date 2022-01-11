//It imports the React library.
import React from "react";

//It connects the component to the Redux store.
import { connect } from "react-redux";

//It creates a new component that renders a React component, while
import { createStructuredSelector } from "reselect";

//It is a selector. It is a function that gets the state from the store and returns an object.
import {
	selectCartItems,
	selectCartTotal,
} from "../../redux/cart/cart.selectors";

//It imports the CheckoutItem component from the checkout-item.component.jsx file.
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

//It imports the StripeCheckoutButton component from the stripe-button folder.
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

//This is the code that imports the react library and the stylesheet for the checkout page.
import "./checkout.styles.scss";

/*
It renders the CheckoutPage component.

		1. We’re mapping over the cartItems array and creating a new CheckoutItem component for each item in the array.
		2. We’re passing the current cartItem to the CheckoutItem component.
		3. We’re setting a key for each CheckoutItem component equal to the current cartItem‘s id.
		4. We’re returning the CheckoutItem component.
		
*/
const CheckoutPage = ({ cartItems, total }) => (
	<div className='checkout-page'>
		<div className='checkout-header'>
			<div className='header-block'>
				<span>Product</span>
			</div>
			<div className='header-block'>
				<span>Description</span>
			</div>
			<div className='header-block'>
				<span>Quantity</span>
			</div>
			<div className='header-block'>
				<span>Price</span>
			</div>
			<div className='header-block'>
				<span>Remove</span>
			</div>
		</div>

		{cartItems.map((cartItem) => (
			<CheckoutItem key={cartItem.id} cartItem={cartItem} />
		))}

		<div className='total'>TOTAL: ${total}</div>
		<div className='test-warning'>
			*Please use the following test credit card for payments*
			<br />
			4242 4242 4242 4242 - Exp: 01/24 CVV: 123
		</div>
		<StripeCheckoutButton price={total} />
	</div>
);

/*
1. We’re importing the connect function from react-redux.
2. We’re creating a function called mapStateToProps that takes in the state as an argument.
3. We’re returning an object that maps the state to the props.
4. We’re importing the selectCartItems and selectCartTotal selectors from the cart.selectors file.
5. We’re exporting the CartDropdown component.
6. We’re importing the connect function from react-redux.
7. We’re creating a function called mapStateToProps that takes in the state as an argument.
8. We’re returning an object that maps the state to the props.
9. We’re importing the selectCartItems and selectCartTotal selectors from the cart.selectors file.
10. We’re exporting the CartDropdown component.
*/
const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

/*
It connects the CheckoutPage component to the Redux store.
*/
export default connect(mapStateToProps)(CheckoutPage);
