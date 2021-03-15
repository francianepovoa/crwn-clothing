import React, { useEffect } from "react";
import { Route } from "react-router-dom";

//connect this component with redux
import { connect } from "react-redux";

//import from components
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";

//import from pages
import CollectionPageContainer from "../collection/collection.container";

//import shop action from redux folder
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

const ShopPage = ({ fetchCollectionsStart, match }) => {
	useEffect(() => {
		fetchCollectionsStart();
	}, [fetchCollectionsStart]);

	return (
		<div className='shop-page'>
			<Route
				exact
				path={`${match.path}`}
				component={CollectionsOverviewContainer}
			/>
			<Route
				path={`${match.path}/:collectionId`}
				component={CollectionPageContainer}
			/>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
