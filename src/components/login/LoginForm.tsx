import React from "react";
import classes from "./stylesLogin/loginForm.module.scss";

const LoginForm = () => {
	return (
		<section className={classes.loginForm}>
			<form>
				<input
					type='email'
					id='email'
					placeholder='Email address'
				/>
				<input
					type='text'
					id='password'
					placeholder='Password'
				/>
				<button>Log in</button>
			</form>
			<div>
				<p>Forgotten password?</p>
			</div>
			<hr />
			<div>
				<button>Create new account</button>
			</div>
		</section>
	);
};

export default LoginForm;
