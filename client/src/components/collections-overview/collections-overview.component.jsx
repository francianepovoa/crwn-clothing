//It imports the React library.
import React from "react";

//It connects the component to the Redux store.
import { connect } from "react-redux";

//It creates a new component that renders the component passed to it as a child.
import { createStructuredSelector } from "reselect";

//It imports the CollectionPreview component from the collection-preview component.
import CollectionPreview from "../collection-preview/collection-preview.component";

//It imports the React library and the Redux library.
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

//This is the code that renders the CollectionsOverview component.
import "./collections-overview.styles.scss";

/*
1. We’re mapping over the collections array and returning a CollectionPreview component for each collection.
2. We’re destructuring the id and otherCollectionsProps properties off of each collection and setting them to their own variables.
3. We’re returning a CollectionPreview component for each collection.
*/
const CollectionsOverview = ({ collections }) => (
	<div className='collections-overview'>
		{collections.map(({ id, ...otherCollectionsProps }) => (
			<CollectionPreview key={id} {...otherCollectionsProps} />
		))}
	</div>
);

/*
1. It’s importing the createStructuredSelector function from the reselect library.
2. It’s importing the selectCollectionsForPreview selector from the shop.selectors.js file.
3. It’s creating a function called mapStateToProps that takes the store as an argument.
4. It’s returning a new object that contains the collections key, which is an array of collections.
5. It’s passing the mapStateToProps function to the connect method, which is a higher-order component that takes a component as an argument and returns a new, connected component.
*/
const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
});

//It connects the CollectionsOverview component to the Redux store.
export default connect(mapStateToProps)(CollectionsOverview);
