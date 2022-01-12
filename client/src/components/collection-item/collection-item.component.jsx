//It imports the React library.
import React from "react";

//It connects the component to the Redux store.
import { connect } from "react-redux";

//It imports the React library and the CustomButton component.
import CustomButton from "../custom-button/custom-button.component";

//It imports the addItem action creator from the cart.actions file.
import { addItem } from "../../redux/cart/cart.actions";

//This is the collection-item component. It is a functional component that renders a div with a class of "collection-item".
import "./collection-item.styles.scss";

/*
1. We’re destructuring the item object from the props that are passed into the component.
2. We’re setting the background image of the image element to the imageUrl that is passed in.
3. We’re setting the name and price of the item in the collection-footer.
4. We’re setting the onClick event handler to addItem, which is a function that we’ll create in the next step.
5. We’re setting the className of the CustomButton to custom-button and setting the text to Add to cart.
6. We’re setting the inverted prop to true, which will give the button a white color.
*/
const CollectionItem = ({ item, addItem }) => {
	const { name, imageUrl, price } = item;
	return (
		<div className='collection-item'>
			<div
				className='image'
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>

			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>

			<CustomButton
				className='custom-button'
				onClick={() => addItem(item)}
				inverted>
				{" "}
				Add to cart{" "}
			</CustomButton>
		</div>
	);
};

/*
1. It’s importing the addItem action creator from the actions folder.
2. It’s creating a function called mapDispatchToProps that takes dispatch as an argument.
3. It’s returning a new object.
4. The object has a property called addItem.
5. The value of the addItem property is a function that takes item as an argument.
6. The function calls dispatch and passes addItem as an argument to it.
7. The addItem action creator is called with the item object as its argument.
8. The item object is passed to the addItem action creator, which adds the item to the store.
*/
const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

//It connects the CollectionItem component to the Redux store.
export default connect(null, mapDispatchToProps)(CollectionItem);
