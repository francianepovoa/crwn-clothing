//It connects the component to the Redux store.
import { connect } from "react-redux";

//It creates a new component that renders a React component, while also passing it some props.
import { createStructuredSelector } from "reselect";

//It imports the React library and the Redux library.
import { compose } from "redux";

//It creates a higher order component that wraps our component and injects the isCollectionsLoaded property into our component as a prop.
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";

//It creates a higher order component that takes a component as an argument and returns a new component.
import WithSpinner from "../../components/with-spinner/with-spinner.component";

//It imports the CollectionPage component from the collection.component.jsx file.
import CollectionPage from "./collection.component";

/*
1. It’s importing the createStructuredSelector function from the reselect library.
2. It’s importing the selectIsCollectionsLoaded function from the shop.selectors.js file.
3. It’s creating a mapStateToProps function that will return an object.
4. It’s passing the isLoading property of the state to the selectIsCollectionsLoaded function.
5. It’s returning the result of the selectIsCollectionsLoaded function.
*/
const mapStateProps = createStructuredSelector({
	isLoading: (state) => !selectIsCollectionsLoaded(state),
});

/*
1. First, we’re importing the WithSpinner HOC component from our HOC folder.
2. Next, we’re importing the connect function from react-redux.
3. Then, we’re importing the mapStateToProps function from our selectors folder.
4. Finally, we’re importing the CollectionPage component from our components folder.
*/
const CollectionPageContainer = compose(
	connect(mapStateProps),
	WithSpinner
)(CollectionPage);

//It creates a container for the CollectionPage component.
export default CollectionPageContainer;
