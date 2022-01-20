//It imports the React library and the useState hook.
import React, { useState } from "react";

//It connects the component to the Redux store.
import { connect } from "react-redux";

//It imports the FormInput component from the form-input folder.
import FormInput from "../form-input/form-input.component";

//It imports the React library and the CustomButton component.
import CustomButton from "../custom-button/custom-button.component";

//It imports the signUpStart action from the user.actions file.
import { signUpStart } from "../../redux/user/user.actions";

//It imports the SignUpPage component from the sign-up.component.jsx file.
import { SignUpContainer, SignUpTitle } from "./sign-up.styles";

const SignUp = ({ signUpStart }) => {
	//It sets the state of the userCredentials object to an empty object.
	const [userCredentials, setUserCredentials] = useState({
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const { displayName, email, password, confirmPassword } = userCredentials;

	//It calls the signUpStart function with the email, password, and displayName.
	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}

		signUpStart({ displayName, email, password });
	};

	/*
	1. We’re destructuring the event object to get the name and value properties.
	2. We’re using the spread operator to create a new object with the name and value properties.
	3. We’re setting the userCredentials object to the new object we created.
	*/
	const handleChange = (event) => {
		const { name, value } = event.target;

		setUserCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<SignUpContainer>
			<SignUpTitle>I do not have a account</SignUpTitle>
			<span>Sign up with your email and password</span>
			<form className='sign-up-form' onSubmit={handleSubmit}>
				<FormInput
					type='text'
					name='displayName'
					value={displayName}
					onChange={handleChange}
					label='Display Name'
					required
				/>
				<FormInput
					type='email'
					name='email'
					value={email}
					onChange={handleChange}
					label='Email'
					required
				/>
				<FormInput
					type='password'
					name='password'
					value={password}
					onChange={handleChange}
					label='Password'
					required
				/>
				<FormInput
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					onChange={handleChange}
					label='Confirm Password'
					required
				/>
				<CustomButton type='submit'>SIGN UP</CustomButton>
			</form>
		</SignUpContainer>
	);
};

/*
1. It’s importing the React and ReactDOM libraries.
2. It’s importing the SignUp component from the SignUp.jsx file.
3. It’s importing the connect function from react-redux.
4. It’s importing the signUpStart function from the userActions.js file.
5. It’s creating a function called mapDispatchToProps that takes dispatch as an argument.
6. It’s returning an object that maps dispatch to the signUpStart function.
7. It’s exporting the mapDispatchToProps function.
*/
const mapDispatchToProps = (dispatch) => ({
	signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

//It connects the SignUp component to the Redux store.
export default connect(null, mapDispatchToProps)(SignUp);
