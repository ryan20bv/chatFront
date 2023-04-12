import React, { Fragment } from "react";
import Head from "next/head";
import Login from "../components/login/Login";

const HomePage = () => {
	return (
		<Fragment>
			<Head>
				<title>Chat - Log in</title>
				<meta
					name='description'
					content='Chat Log in and registration'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
			</Head>
			<Login />
		</Fragment>
	);
};

export default HomePage;
