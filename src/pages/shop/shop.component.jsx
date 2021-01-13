import React from "react";
import { Route } from "react-router-dom";

//connect this component with redux
import { connect } from "react-redux";

//import from components
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";

//import from pages
import CollectionPageContainer from "../collection/collection.container";

//import shop action from redux folder
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
	componentDidMount() {
		const { fetchCollectionsStartAsync } = this.props;
		fetchCollectionsStartAsync();
	}

	render() {
		const { match } = this.props;
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
	}
}

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
