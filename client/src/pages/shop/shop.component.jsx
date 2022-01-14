//It imports the React library, and the ReactDOM library.
import React, { useEffect, lazy, Suspense } from "react";

//It imports the React library and the Route component from the react-router-dom library.
import { Route } from "react-router-dom";

//It connects the component to the Redux store.
import { connect } from "react-redux";

//It imports the React library and the Spinner component from the components folder.
import Spinner from "../../components/spinner/spinner.component";

//It creates a new component that is connected to the store.
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

// ?React Lazy
/*
1. Import the CollectionsOverview component from the collections-overview.component file.
2. Import the lazy() function from react.
3. Import the CollectionsOverviewContainer component from the collections-overview.container file.
4. Wrap the CollectionsOverview component in the lazy() function.
5. Wrap the CollectionsOverviewContainer component in the lazy() function.
*/
const CollectionsOverviewContainer = lazy(() =>
	import("../../components/collections-overview/collections-overview.container")
);

/*
1. Import the CollectionPage component from the collection folder.
2. Lazy load the component and pass it as a prop to the SFC.
3. Wrap the SFC in a <Suspense> component.
4. Wrap the SFC in a <Route> component.
5. Pass the route props to the <Route> component.
*/
const CollectionPageContainer = lazy(() =>
	import("../collection/collection.container")
);

/*
1. We’re using the useEffect hook to call the fetchCollectionsStart action creator when the component mounts.
2. We’re using the Suspense component to make sure the collections overview component is loaded before the CollectionPage component.
3. We’re using the Route component to render the CollectionPage component when the URL contains a collectionId.
4. We’re using the Route component to render the CollectionsOverview component when the URL doesn’t contain a collectionId.
*/
const ShopPage = ({ fetchCollectionsStart, match }) => {
	useEffect(() => {
		fetchCollectionsStart();
	}, [fetchCollectionsStart]);

	return (
		<div className='shop-page'>
			<Suspense fallback={<Spinner />}>
				<Route
					exact
					path={`${match.path}`}
					component={CollectionsOverviewContainer}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					component={CollectionPageContainer}
				/>
			</Suspense>
		</div>
	);
};

/*
1. It’s importing the connect function from react-redux.
2. It’s importing the fetchCollectionsStart action creator from our shop.actions.js file.
3. It’s mapping the fetchCollectionsStart action creator to the props of our ShopPage component.
4. It’s returning the connected version of ShopPage.
*/
const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

//It connects the component to the Redux store.
export default connect(null, mapDispatchToProps)(ShopPage);
