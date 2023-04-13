import React from "react";
import LoginForm from "./LoginForm";

const Login = () => {
	return (
		<main className='h-screen w-screen bg-green-200 flex items-center justify-evenly flex-col md:flex-row '>
			<section>
				<h1 className='text-3xl font-bold'>Chat App</h1>
				<p>Connect with other!</p>
			</section>
			<LoginForm />
		</main>
	);
};

export default Login;
