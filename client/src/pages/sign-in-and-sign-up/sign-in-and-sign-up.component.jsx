//It imports the React library.
import React from "react";

//It imports the SignIn component from the sign-in component folder.
import SignIn from "../../components/sign-in/sign-in.component";

//It imports the SignUp component from the sign-up folder.
import SignUp from "../../components/sign-up/sign-up.component";

//It imports the SignIn component from the sign-in.component.jsx file.
import "./sign-in-and-sign-up.styles.scss";

/*
1. It imports the SignIn and SignUp components from the SignInAndSignUpPage.jsx file.
2. It renders the SignIn and SignUp components inside the SignInAndSignUpPage.jsx file.
3. It creates a div element with the className sign-in-and-sign-up.
4. It renders the SignInAndSignUpPage.jsx component inside the div element.
*/
const SignInAndSignUpPage = () => (
	<div className='sign-in-and-sign-up'>
		<SignIn />
		<SignUp />
	</div>
);

//It exports the SignInAndSignUpPage component for use in other files.
export default SignInAndSignUpPage;
