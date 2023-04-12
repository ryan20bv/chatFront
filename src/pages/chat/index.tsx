import React, { Fragment } from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import { IChat } from "../../typesFile/chatType";
import ChatMain from "../../components/chat/ChatMain";

interface propsType {
	chats: IChat[];
}

const ChatPage: React.FC<propsType> = ({ chats }) => {
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
			<ChatMain chatData={chats} />
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

export default ChatPage;
