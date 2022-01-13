//It imports the React library.
import React from "react";

//It connects the component to the router.
import { withRouter } from "react-router-dom";

//We’re importing the MenuItem component from our menu-item.styles.jsx file.
import {
	MenuItemContainer,
	BackgroundImageContainer,
	ContentContainer,
	ContentTitle,
	ContentSubtitle,
} from "./menu-item.styles";

/*
It creates a menu item component that will be used in the directory component.
*/
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
	/*
	1. We’re creating a new component called MenuItemContainer.
	2. We’re passing in a size prop that will be used in the BackgroundImageContainer.
	3. We’re passing in a function called onClick that will be called when the link is clicked.
	4. We’re passing in a linkUrl prop that will be used to generate the link.
	5. We’re passing in an imageUrl prop that will be used in the BackgroundImageContainer.
	*/
	<MenuItemContainer
		size={size}
		onClick={() => history.push(`${match.url}${linkUrl}`)}>
		<BackgroundImageContainer
			className='background-image'
			imageUrl={imageUrl}
		/>
		<ContentContainer className='content'>
			<ContentTitle>{title.toUpperCase()}</ContentTitle>
			<ContentSubtitle>SHOP NOW</ContentSubtitle>
		</ContentContainer>
	</MenuItemContainer>
);

//It wraps the MenuItem component with a higher order component (HOC) called withRouter.
export default withRouter(MenuItem);
