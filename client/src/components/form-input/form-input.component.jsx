//It imports the React library.
import React from "react";

//This is a React component. It is a function that returns a React element.
import "./form-input.styles.scss";

/*
1. The FormInput component is a functional component that takes in a handleChange function and a label.
2. The handleChange function is passed down from the SignIn component.
3. The label is passed down from the SignIn component.
4. The FormInput component returns a div with a class of group.
5. The div has an input with a class of form-input.
6. The input has an onChange function that is passed down from the SignIn component.
7. The input has the otherProps that are passed down from the SignIn component.
8. The FormInput component returns a label with a class of form-input-label if a label is passed down from the SignIn component.
9. The label has a class of shrink if the input value is greater than 0.
10. The label has a class of form-input-label if a label is passed down from the SignIn component.
*/
const FormInput = ({ handleChange, label, ...otherProps }) => (
	<div className='group'>
		<input className='form-input' onChange={handleChange} {...otherProps} />
		{label ? (
			<label
				className={`${
					otherProps.value.length ? "shrink" : ""
				} form-input-label`}>
				{label}
			</label>
		) : null}
	</div>
);

//It creates a React component called FormInput.
export default FormInput;
