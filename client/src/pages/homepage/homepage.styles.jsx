//It imports the React library and the styled-components library.
import styled from "styled-components";

/*
1. Import styled from 'styled-components'
2. Create a new component called HomePageContainer and pass in styled.div as the first argument.
3. Inside the HomePageContainer component, we create a new div element and pass in the styled.div as the first argument.
4. We then set the display property to flex and the flex-direction property to column.
5. We also set the align-items property to center.
6. Finally, we export the HomePageContainer component.
*/
export const HomePageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
