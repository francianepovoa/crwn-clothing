//It imports React, useEffect, lazy, and Suspense from the react library.
import React, { useEffect, lazy, Suspense } from "react";
//It imports the Switch, Route, and Redirect components from the react-router-dom package.
import { Switch, Route, Redirect } from "react-router-dom";
//This code connects the component to the Redux store.
import { connect } from "react-redux";
//It creates a new object that has the same keys as the state object.
import { createStructuredSelector } from "reselect";
//It imports the GlobalStyle component from the global.styles file.
import { GlobalStyle } from "./global.styles";
//It imports the Header component from the components folder.
import Header from "./components/header/header.component";
//It imports the Spinner component from the components/spinner/spinner.component.jsx file.
import Spinner from "./components/spinner/spinner.component.jsx";
//It imports the selectCurrentUser selector from the user.selectors file.
import { selectCurrentUser } from "../src/redux/user/user.selectors";
//It imports the redux action checkUserSession from the user.actions file.
import { checkUserSession } from "./redux/user/user.actions";

/*
It imports the HomePage component and loads it.
*/
const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
/*
It imports the ShopPage component and loads it.
*/
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
/*
1. Importing the SignInAndSignUpPage component from the ./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx file.
2. Lazy loading the SignInAndSignUpPage component.
3. Adding the SignInAndSignUpPage component to the App.jsx component.
*/
const SignInAndSignUpPage = lazy(() =>
	import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component")
);
/*
It imports the CheckoutPage component and loads it.
*/
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));

/*
It checks if the user is logged in and if they are, it redirects them to the home page.
*/
const App = ({ checkUserSession, currentUser }) => {
	useEffect(() => {
		checkUserSession();
	}, [checkUserSession]);

	return (
		<div>
			<GlobalStyle />
			<Header />
			<Switch>
				<Suspense fallback={<Spinner />}>
					<Route exact path='/' component={HomePage} />

					<Route path='/shop' component={ShopPage} />
					<Route exact path='/checkout' component={CheckoutPage} />
					<Route
						exact
						path='/signin'
						render={() =>
							currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
						}
					/>
				</Suspense>
			</Switch>
		</div>
	);
};

/*
1. It first imports the `createStructuredSelector` function from `reselect` and then the `selectCurrentUser` selector from `../../redux/user/user.selectors.js`
2. It then creates a `mapStateToProps` function that takes the `state` as an argument and returns an object.
3. The object that is returned is the `currentUser` property of the `state` object.
4. The `currentUser` property is the value returned by the `selectCurrentUser` selector.
*/
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

/*
1. It’s importing the `checkUserSession` action creator from the `actions/session_actions.js` file.
2. It’s creating a `mapDispatchToProps` function that takes dispatch as an argument.
3. It’s returning an object that maps dispatch to the `checkUserSession` action creator.
*/
const mapDispatchToProps = (dispatch) => ({
	checkUserSession: () => dispatch(checkUserSession()),
});

/*
It connects the App component to the Redux store.
*/
export default connect(mapStateToProps, mapDispatchToProps)(App);
