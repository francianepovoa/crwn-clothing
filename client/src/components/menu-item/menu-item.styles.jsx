//It imports the React library and the styled-components library.
import styled from "styled-components";

//It creates a styled component that will be used to create the menu items.
export const MenuItemContainer = styled.div`
	height: ${({ size }) => (size ? "380px" : "240px")};
	min-width: 30%;
	overflow: hidden;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	margin: 0 7.5px 15px;
	overflow: hidden;
	&:hover {
		cursor: pointer;
		& .background-image {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}
		& .content {
			opacity: 0.9;
		}
	}
	&:first-child {
		margin-right: 7.5px;
	}
	&:last-child {
		margin-left: 7.5px;
	}
	@media screen and (max-width: 800px) {
		height: 200px;
	}
`;

/*
1. We’re creating a styled component that will take an imageUrl prop.
2. We’re setting the background image of the div to the imageUrl that is passed in.
3. We’re setting the background size to cover, which means it will cover the entire background.
4. We’re setting the background position to center, which means the image will be centered.
*/
export const BackgroundImageContainer = styled.div`
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

/*
1. The styled-components library is imported.
2. The styled-components library is used to create a new component called ContentContainer.
3. The ContentContainer component is given a height of 90px, a padding of 0 25px, a display of flex, a flex-direction of column, an align-items of center, a justify-content of center, a border of 1px solid black, a background-color of white, and an opacity of 0.7.
4. The ContentContainer component is given a position of absolute.
*/
export const ContentContainer = styled.div`
	height: 90px;
	padding: 0 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	background-color: white;
	opacity: 0.7;
	position: absolute;
`;

/*
1. Import styled from react-emotion.
2. Create a new component called ContentTitle.
*/
export const ContentTitle = styled.span`
	font-weight: bold;
	margin-bottom: 6px;
	font-size: 22px;
	color: #4a4a4a;
`;

//It creates a styled component that renders a span with the font-weight lighter and font-size 16px.
export const ContentSubtitle = styled.span`
	font-weight: lighter;
	font-size: 16px;
`;
