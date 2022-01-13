//It imports the React library.
import React from "react";

//It connects the component to the Redux store.
import { connect } from "react-redux";

//It creates a new component that renders a React component, while also passing it some props.
import { createStructuredSelector } from "reselect";

//It imports the React library and the Redux library.
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

//It imports the MenuItem component from the menu-item.component.jsx file.
import MenuItem from "../menu-item/menu-item.component";

//It imports the Directory component from the directory.component.jsx file.
import "./directory.styles.scss";

/*
1. We’re mapping over the sections array and returning a MenuItem component for each section.
2. We’re destructuring the id and otherSectionProps properties from each section.
3. We’re passing the otherSectionProps as props to the MenuItem component.
*/
const Directory = ({ sections }) => (
	<div className='directory-menu'>
		{sections.map(({ id, ...otherSectionProps }) => (
			<MenuItem key={id} {...otherSectionProps} />
		))}
	</div>
);

/*
1. It’s importing the `createStructuredSelector` function from the `reselect` package.
2. It’s calling the `createStructuredSelector` function and passing in the `state` object.
3. It’s extracting the `directory` object from the `state` object and assigning it to a `sections` variable.
4. It’s returning a new `mapStateToProps` function that takes the `state` and `ownProps` objects as arguments and returns an object with a `sections` property.
*/
const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});

//It connects the Directory component to the Redux store.
export default connect(mapStateToProps)(Directory);
