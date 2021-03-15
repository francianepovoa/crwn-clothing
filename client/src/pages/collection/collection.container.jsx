import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
//import shop selectors from redux folder
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "./collection.component";

const mapStateProps = createStructuredSelector({
	isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
	connect(mapStateProps),
	WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
