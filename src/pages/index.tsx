import React, { Fragment } from "react";
import Head from "next/head";
import Login from "../components/login/Login";

const HomePage = () => {
	return (
		<Fragment>
			<Head>
				<title>Simple Chat</title>
				<meta
					name='description'
					content='Simple Chat app'
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
