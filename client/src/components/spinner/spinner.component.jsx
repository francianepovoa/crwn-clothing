//It imports the React library.
import React from "react";

//It creates a spinner component that can be used in other components.
import { SpinnerContainer, SpinnerOverlay } from "./spinner.styles";

/*
1. It’s creating a div with the className of spinnerOverlay.
2. It’s creating a div with the className of spinnerContainer.
3. It’s returning the DIVS in the order that they are created.
*/
const Spinner = () => (
	<SpinnerOverlay>
		<SpinnerContainer />
	</SpinnerOverlay>
);

//It creates a React component called Spinner.
export default Spinner;
