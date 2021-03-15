import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const onToken = (token) => {
		console.log(token);
		alert("Payment Successful");
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='CRWN Clothing Ltd.'
			billingAddress
			shippingAddress
			image='https://sendeyo.com/up/d/f3eb2117da'
			description={`Your total is $${price} `}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey='pk_test_51HpYXPD4eROBuL8kVhuc1IDdZz2wAkQcBZQTLpq03HOjIQgr08OxQojzIgB5xEsmbCkOfIJwrV5P9ZR6Y8bXqPuD00cBRwXgPH'
		/>
	);
};

export default StripeCheckoutButton;
