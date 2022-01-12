//It imports the React library.
import React from "react";

//It imports the React library and the Spinner component.
import Spinner from "../spinner/spinner.component";

/*
1. We’re creating a new component that takes in a component to wrap as an argument.
2. We’re returning a new component that checks the isLoading prop and if it’s true, it will render the Spinner component, otherwise it will render the component that was passed in.
3. We’re exporting the new component, which is a HOC.
*/
const WithSpinner =
	(WrappedComponent) =>
	({ isLoading, ...otherProps }) => {
		return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
	};

//It creates a functional component that accepts a prop called isLoading and if that prop is true, it will return the spinner component, otherwise it will return the component that is passed in as a prop.
export default WithSpinner;
