//It imports the React library and the useState hook.
import React, { useState } from "react";

//It connects the component to the Redux store.
import { connect } from "react-redux";

//It imports the FormInput component from the form-input folder.
import FormInput from "../form-input/form-input.component";

//It imports the React library and the CustomButton component.
import CustomButton from "../custom-button/custom-button.component";

//It imports the Google Sign In and Email Sign In functions from the user.actions file.
import {
	googleSignInStart,
	emailSignInStart,
} from "../../redux/user/user.actions";

//It creates a SignIn component that renders a SignInContainer, SignInTitle, and ButtonsBarContainer.
import {
	SignInContainer,
	SignInTitle,
	ButtonsBarContainer,
} from "./sign-in.styles";

/*
It creates a sign in form that allows users to sign in with their email and password.
*/
const SignIn = ({ emailSignInStart, googleSignInStart }) => {
	/*
	1. We’re creating a state variable called userCredentials.
	2. We’re creating a state variable called setCredentials.
	3. We’re setting the initial value of userCredentials to an empty object.
	4. We’re setting the initial value of setCredentials to an empty object.
	5. We’re creating a function called handleChange.
	6. We’re setting the value of userCredentials to the value of the event target’s name attribute.
	7. We’re setting the value of setCredentials to the value of the event target’s value attribute.
	8. We’re creating a function called handleSubmit.
	9. We’re setting the value of userCredentials to an empty object.
	10. We’re setting the value of setCredentials to an empty object.
	11. We’re returning the value of userCredentials.
	*/
	const [userCredentials, setCredentials] = useState({
		email: "",
		password: "",
	});

	const { email, password } = userCredentials;

	//It calls the emailSignInStart action creator, which dispatches an action of type SIGN_IN_START.
	const handleSubmit = async (event) => {
		event.preventDefault();

		emailSignInStart(email, password);
	};

	/*
	1. We’re destructuring the event object to get the value and name properties.
	2. We’re setting the userCredentials object to a new object that has all the same keys, but with the value from the event object assigned to the correct key.
	3. We’re using the spread operator (...) to spread out the userCredentials object and pass it as the second argument to setCredentials.
	*/
	const handleChange = (event) => {
		const { value, name } = event.target;

		setCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<SignInContainer>
			<SignInTitle>I already have an account</SignInTitle>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name='email'
					type='email'
					handleChange={handleChange}
					value={email}
					label='email'
					required
				/>
				<FormInput
					name='password'
					type='password'
					value={password}
					handleChange={handleChange}
					label='password'
					required
				/>
				<ButtonsBarContainer>
					<CustomButton type='submit'> Sign in </CustomButton>
					<CustomButton
						type='button'
						onClick={googleSignInStart}
						isGoogleSignIn>
						Sign in with Google
					</CustomButton>
				</ButtonsBarContainer>
			</form>
		</SignInContainer>
	);
};

/*
1. We’re importing the GoogleSignInStart and EmailSignInStart actions from our redux/actions.js file.
2. We’re mapping the dispatch function to props.
3. We’re creating a function that will dispatch the googleSignInStart action when the GoogleSignInButton is clicked.
4. We’re creating a function that will dispatch the emailSignInStart action when the EmailSignInButton is clicked.
5. We’re returning the mapped dispatch function to props.
*/
const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password })),
});

//It connects the SignIn component to the Redux store.
export default connect(null, mapDispatchToProps)(SignIn);
