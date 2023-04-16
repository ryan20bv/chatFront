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
		// <section className={classes.loginForm}>
		<section
			className={`border border-black p-4 sm:w-96  w-11/12 rounded-lg  ${classes.loginForm}`}
		>
			<form
				onSubmit={submitFormHandler}
				className='w-full '
			>
				<input
					type='email'
					id='email'
					placeholder='Email address'
					className='block w-full px-3 py-2 mb-4 rounded-md text-xl
					'
				/>
				<input
					type='text'
					id='password'
					placeholder='Password'
					className='block w-full px-3 py-2 mb-4 rounded-md text-xl'
				/>
				<button className='block w-full py-2 mb-4 bg-blue-500 text-white rounded-md text-lg'>
					Log in
				</button>
			</form>

			<p className='text-center text-blue-700'>Forgotten password?</p>

			<hr className='border-black my-5' />

			<button className='bg-green-600 py-2 block w-full text-white rounded-md text-lg'>
				Create new account
			</button>
		</section>
	);
};

export default LoginForm;
