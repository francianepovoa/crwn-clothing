//It imports the React library.
import React from "react";

//It connects the component to the Redux store.
import { connect } from "react-redux";

//It imports the CollectionItem component from the collection-item directory.
import CollectionItem from "../../components/collection-item/collection-item.component";

//It imports the React library and the Redux library.
import { selectCollection } from "../../redux/shop/shop.selectors";

//This is the code that allows us to use the React library.
import "./collection.styles.scss";

/*
1. We’re destructuring the collection object from the props object.
2. We’re mapping over the items array and rendering a CollectionItem component for each item.
3. We’re setting the key prop on each CollectionItem to the item’s id.
*/
const CollectionPage = ({ collection }) => {
	const { title, items } = collection;
	return (
		<div className='collection-page'>
			<h2 className='title'>{title}</h2>
			<div className='items'>
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

/*
1. It first maps the state to the props of the component.
2. Then it selects the collection from the state.
3. Finally, it returns the collection.
*/
const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

//It connects the CollectionPage component to the Redux store.
export default connect(mapStateToProps)(CollectionPage);
