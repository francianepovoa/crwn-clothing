//It imports the React library and the styled-components library.
import styled from "styled-components";

/*
1. It’s creating a styled component called SignUpContainer.
2. It’s setting the display property to flex.
3. It’s setting the flex-direction property to column.
4. It’s setting the width property to 380px.
*/
export const SignUpContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 380px;
`;

/*
1. Import styled from react-emotion.
2. Create a new component called SignUpTitle.
3. Set the component’s display name to SignUpTitle.
4. Set the component’s props to { children: children }.
5. Set the component’s children to the title text.
6. Set the component’s className to SignUpTitle.
7. Set the component’s style to { margin: 10px 0 }.
8. Export the component.
*/
export const SignUpTitle = styled.h2`
	margin: 10px 0;
`;
