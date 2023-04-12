import React, { FormEvent } from "react";
import { useRouter } from "next/router";
import classes from "./stylesLogin/loginForm.module.scss";

const LoginForm = () => {
	const router = useRouter();

	const submitFormHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		router.replace("/chat");
	};
	return (
		<section className={classes.loginForm}>
			<form onSubmit={submitFormHandler}>
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
