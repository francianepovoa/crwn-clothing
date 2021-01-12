import React from "react";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";

//connect this component with redux
import { connect } from "react-redux";

//import from components
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

//import from pages
import CollectionPage from "../collection/collection.component";

//import spinner
import WithSpinner from "../../components/with-spinner/with-spinner.component";

//import shop action from redux folder
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

//import shop selectors from redux folder
import {
	selectIsCollectionFetching,
	selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selectors";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
	componentDidMount() {
		const { fetchCollectionsStartAsync } = this.props;
		fetchCollectionsStartAsync();
	}

	render() {
		const { match, isCollectionFetching, isCollectionsLoaded } = this.props;
		return (
			<div className='shop-page'>
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<CollectionsOverviewWithSpinner
							isLoading={isCollectionFetching}
							{...props}
						/>
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionPageWithSpinner
							isLoading={!isCollectionsLoaded}
							{...props}
						/>
					)}
				/>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	isCollectionFetching: selectIsCollectionFetching,
	isCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
