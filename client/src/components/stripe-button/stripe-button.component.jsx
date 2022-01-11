//It imports the React library.
import React from "react";

//It imports the StripeCheckout component from the react-stripe-checkout module.
import StripeCheckout from "react-stripe-checkout";

//It imports the React library and the axios library.
import axios from "axios";

/*
1. We’re importing the StripeCheckout component from react-stripe-checkout.
2. We’re setting the StripeCheckout component’s label prop to “Pay Now”.
3. We’re setting the StripeCheckout component’s name prop to “CRWN Clothing Ltd.”.
4. We’re setting the StripeCheckout component’s billingAddress and shippingAddress props to true.
5. We’re setting the StripeCheckout component’s image prop to a placeholder image.
6. We’re setting the StripeCheckout component’s description prop to “Your total is $”.
7. We’re setting the StripeCheckout component’s amount prop to priceForStripe.
8. We’re setting the StripeCheckout component’s panelLabel prop to “Pay Now”.
9. We’re setting the StripeCheckout component’s token prop to onToken.
10. We’re setting the StripeCheckout component’s stripeKey prop to publishableKey.
*/
const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51HpYXPD4eROBuL8kVhuc1IDdZz2wAkQcBZQTLpq03HOjIQgr08OxQojzIgB5xEsmbCkOfIJwrV5P9ZR6Y8bXqPuD00cBRwXgPH";

	/*
	1. It’s sending a POST request to the payment route.
	2. It’s sending the amount of money that the user has to pay.
	3. It’s sending the token that Stripe has generated for the payment.
	*/
	const onToken = (token) => {
		axios({
			url: "payment",
			method: "post",
			data: {
				amount: priceForStripe,
				token: token,
			},
		})
			/*
			This code uses the fetch() function to make a GET request to the server.
			*/
			.then((response) => {
				alert("Successful payment");
			})
			/*
			1. It first checks if the user has a payment method on file. If not, it redirects the user to the payment page.
			2. If the user has a payment method on file, it creates a payment intent with the total amount of the order.
			3. It then confirms the payment with the payment method.
			4. If the payment is successful, it creates a new order and redirects the user to the order page.
			5. If the payment is unsuccessful, it throws an error.
			*/
			.catch((error) => {
				console.log("Payment Error: ", JSON.parse(error));
				alert(
					"There was an issue with your payment! Please make sure you use the provided credit card."
				);
			});
	};

	// It’s using the StripeCheckout component to render the checkout form.
	return (
		<StripeCheckout
			label='Pay Now'
			name='CRWN Clothing Ltd.'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price} `}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

//It creates a StripeCheckoutButton component that renders a button with the text "Pay Now" on it. When the button is clicked, it will open a Stripe checkout modal window.

export default StripeCheckoutButton;
