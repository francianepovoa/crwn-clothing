import React from "react";
import { Route } from "react-router-dom";

//connect this component with redux
import { connect } from "react-redux";

//import from components
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

//import from pages
import CollectionPage from "../collection/collection.component";

//import from firebase
import {
	firestore,
	convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

//import spinner
import WithSpinner from "../../components/with-spinner/with-spinner.component";

//import shop action from redux folder
import { updateCollections } from "../../redux/shop/shop.actions";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
	state = {
		loading: true,
	};

	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection("collections");

		//Promise style
		collectionRef.get().then((snapshot) => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			updateCollections(collectionsMap);
			this.setState({ loading: false });
		});
	}

	render() {
		const { match } = this.props;
		const { loading } = this.state;
		return (
			<div className='shop-page'>
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<CollectionsOverviewWithSpinner isLoading={loading} {...props} />
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionPageWithSpinner isLoading={loading} {...props} />
					)}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateCollections: (collectionsMap) =>
		dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
