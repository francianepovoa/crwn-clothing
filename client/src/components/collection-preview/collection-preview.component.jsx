//It imports the React library.
import React from "react";

//It imports the CollectionItem component from the collection-item directory.
import CollectionItem from "../collection-item/collection-item.component";

//This code imports the React library and the stylesheet for the component.
import "./collection-preview.styles.scss";

/*
It creates a component that displays a title and a preview of a collection of items.
*/
const CollectionPreview = ({ title, items }) => (
	<div className='collection-preview'>
		<h1 className='title'>{title.toUpperCase()}</h1>
		<div className='preview'>
			{items
				.filter((_item, idx) => idx < 4)
				.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
		</div>
	</div>
);

//It creates a new component called CollectionPreview.
export default CollectionPreview;
