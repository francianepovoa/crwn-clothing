import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();

		this.setState({ email: "", password: "" });
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type='email'
						name='email'
						handleChange={this.handleChange}
						value={this.state.email}
						label='email'
						required
					/>

					<FormInput
						type='password'
						name='password'
						value={this.state.email}
						handleChange={this.handleChange}
						label='password'
						required
					/>

					<CustomButton type='submit'> Sign in </CustomButton>
				</form>
			</div>
		);
	}
}

export default SignIn;
