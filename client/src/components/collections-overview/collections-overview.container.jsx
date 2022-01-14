//It connects the component to the Redux store.
import { connect } from "react-redux";

//It creates a new component that renders the component passed to it as a child.
import { createStructuredSelector } from "reselect";

//It imports the React library and the Redux library.
import { compose } from "redux";

//It is a selector that returns the value of the isCollectionFetching property of the shop slice of the state.
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";

//It creates a higher order component that takes a component as an argument and returns a new component.
import WithSpinner from "../with-spinner/with-spinner.component";

//It imports the CollectionsOverview component from the collections-overview.component.jsx file.
import CollectionsOverview from "./collections-overview.component";

/*
1. It’s importing the createStructuredSelector function from the reselect library.
2. It’s importing the selectIsCollectionFetching selector from the shop.selectors file.
3. It’s passing the selectIsCollectionFetching selector as a prop to the WithSpinner HOC.
4. It’s returning the WithSpinner HOC as the default export.
*/
const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionFetching,
});

/*
1. First, we’re importing the WithSpinner HOC component from our HOC folder.
2. Next, we’re importing the connect function from react-redux.
3. Then, we’re creating a function that takes in the CollectionsOverview component and returns a new component that wraps the CollectionsOverview component in a HOC.
4. Next, we’re importing the WithSpinner HOC component from our HOC folder.
5. Then, we’re mapping the state to props.
6. Finally, we’re returning a new component that wraps the CollectionsOverview component in a HOC.
*/
const CollectionsOverviewContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionsOverview);

//It creates a container for the CollectionsOverview component.
export default CollectionsOverviewContainer;
