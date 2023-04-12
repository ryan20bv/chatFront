import React from "react";
import LoginForm from "./LoginForm";
import classes from "./stylesLogin/login.module.scss";

const Login = () => {
	return (
		<main className={classes.loginMain}>
			<section>
				<h1>Chat App</h1>
				<p>Connect with other!</p>
			</section>
			<LoginForm />
		</main>
	);
};

export default Login;
