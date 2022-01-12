//It imports the React library.
import React from "react";

//It creates a custom button component that can be imported into any component and used.
import { CustomButtonContainer } from "./custom-button.styles";

/*
1. It’s creating a new component called CustomButton that accepts all the props that Button receives, and then any props that are passed to CustomButton.
2. It’s rendering the children of CustomButton, which will be the text inside the button.
3. It’s passing all the props of CustomButton to CustomButtonContainer, which is the button wrapper.
*/
const CustomButton = ({ children, ...props }) => (
	<CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

//It creates a button that can be used in a React app.
export default CustomButton;
