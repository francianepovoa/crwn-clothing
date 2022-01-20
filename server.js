/* Requiring the express module. */
const express = require("express");
/* Creating a path to the file. */
const path = require("path");
//This is importing the body-parser module from the node_modules folder.
const bodyParser = require("body-parser");

//It loads the .env file into process.env
if (process.env.NODE_ENV !== "production") require("dotenv").config();

//It connects to the Stripe API using the Stripe library and sets the Stripe API key.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//Creating an express app and setting it to the variable app.
const app = express();
const port = process.env.PORT || 5000;

//This is telling Express to parse the body of the request as JSON.
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.use(bodyParser.json());

/*
1. It first checks if the NODE_ENV environment variable is set to production. 
   If it is, it will use the express.static middleware to serve the static files from the build folder.
2. If the NODE_ENV environment variable is not set to production, it will simply serve the index.html file from the build folder.
*/
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "client/build")));

	app.get("*", function (req, res) {
		res.sendFile(path.join(__dirname, "client/build", "index.html"));
	});
}

/*
1. It creates a new express application.
2. It creates a new server using the express application.
3. It listens on the specified port for incoming requests.
4. If an error occurs, it throws the error.
5. It logs the server is running on the specified port.
*/
app.listen(port, (error) => {
	if (error) throw error;
	console.log("Server running on port " + port);
});

/*
1. It creates a new charge object with the source token and amount.
2. It then creates the charge on Stripe’s servers.
3. It returns the charge object to the client.
*/
app.post("/payment", (req, res) => {
	const body = {
		source: req.body.token.id,
		amount: req.body.amount,
		currency: "usd",
	};

	stripe.charges.create(body, (stripeErr, stripeRes) => {
		if (stripeErr) {
			res.status(500).send({ error: stripeErr });
		} else {
			res.status(200).send({ success: stripeRes });
		}
	});
});
