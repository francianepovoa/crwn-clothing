//It imports the styled-components library and creates a new component called Question.
import styled from "styled-components";

/*
1. We’re creating a styled component that will render a div with the following styles:
2. We’re exporting the component so that we can use it in other components.
*/
export const SpinnerOverlay = styled.div`
	height: 60vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

//The SpinnerContainer is a styled div that displays a spinning spinner.
export const SpinnerContainer = styled.div`
	display: inline-block;
	width: 50px;
	height: 50px;
	border: 3px solid rgba(195, 195, 195, 0.6);
	border-radius: 50%;
	border-top-color: #636767;
	animation: spin 1s ease-in-out infinite;
	-webkit-animation: spin 1s ease-in-out infinite;
	@keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
		}
	}
	@-webkit-keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
		}
	}
`;
