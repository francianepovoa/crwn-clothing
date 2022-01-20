//It imports the React library and the styled-components library.
import styled from "styled-components";

/*
1. Import styled from react-emotion.
2. Create a styled component that will render a div.
3. Set the width of the div to 380px and display it as a column.
*/
export const SignInContainer = styled.div`
	width: 380px;
	display: flex;
	flex-direction: column;
`;

/*
1. Import styled from react-emotion.
2. Create a new component called SignInTitle.
3. Set the component’s display name to SignInTitle.
4. Set the component’s default props.
5. Set the component’s default state.
6. Create a render function.
7. Return the component’s HTML.
*/
export const SignInTitle = styled.h2`
	margin: 10px 0;
`;

/*
1. It’s creating a styled component called ButtonsBarContainer.
2. It’s setting the display property to flex.
3. It’s setting the justify-content property to space-between.
*/
export const ButtonsBarContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
