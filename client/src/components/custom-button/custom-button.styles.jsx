//It imports the React library and the styled-components library.
import styled, { css } from "styled-components";

/*
1. It’s creating a new style tag with the name “buttonStyles”.
2. It’s creating a new class called “buttonStyles”.
3. It’s adding the “buttonStyles” class to the “button” element.
4. It’s adding the “buttonStyles” class to the “button” element when the mouse is hovered over it.
*/
const buttonStyles = css`
	background-color: black;
	color: white;
	border: none;

	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
	}
`;

const invertedButtonStyles = css`
	background-color: white;
	color: black;
	border: 1px solid black;

	&:hover {
		background-color: black;
		color: white;
		border: none;
	}
`;

const googleSignInStyles = css`
	background-color: #4285f4;
	color: white;

	&:hover {
		background-color: #357ae8;
		border: none;
	}
`;

/*
1. We’re creating a function called getButtonStyles that takes in a prop called props.
2. If the props.isGoogleSignIn is true, we return the googleSignInStyles object.
3. If the props.inverted is true, we return the invertedButtonStyles object.
4. If neither of the above are true, we return the buttonStyles object.
*/
const getButtonStyles = (props) => {
	if (props.isGoogleSignIn) {
		return googleSignInStyles;
	}

	return props.inverted ? invertedButtonStyles : buttonStyles;
};

/*
1. We’re creating a styled component that will render a button with some styles.
2. We’re setting the min-width to 165px, the width to auto, the height to 50px, the letter-spacing to 0.5px, the line-height to 50px, the padding to 0 35px 0 35px, the font-size to 15px, the text-transform to uppercase, the font-family to "Open Sans Condensed", the font-weight to bolder, and the cursor to pointer.
3. We’re setting display to flex and justify-content to center.
4. We’re calling the getButtonStyles function.
*/
export const CustomButtonContainer = styled.button`
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px 0 35px;
	font-size: 15px;
	text-transform: uppercase;
	font-family: "Open Sans Condensed";
	font-weight: bolder;
	cursor: pointer;
	display: flex;
	justify-content: center;
	${getButtonStyles}
`;
