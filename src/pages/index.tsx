import React, { Fragment } from "react";
import Head from "next/head";

import Chat from "../components/chat/Chat";

import styles from "../styles/Home.module.css";
import { IChats } from "../typesFile/chatType";

import { GetStaticProps } from "next";

const HomePage: React.FC<IChats> = ({ chats }) => {
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
			<main className={styles.main}>
				<div>
					<h1>Home Page</h1>
					<Chat chats={chats} />
				</div>
			</main>
		</Fragment>
	);
};
export const getStaticProps: GetStaticProps = async (context) => {
	const url = "http://localhost:3000/api/chatNext";
	const options = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	};
	const response = await fetch(url, options);

	const data = await response.json();
	// console.log(data);
	return {
		props: { chats: data }, // will be passed to the page component as props
		revalidate: 10, // In seconds
	};
};

export default HomePage;
