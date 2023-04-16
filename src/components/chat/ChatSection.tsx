import React, { useState, Fragment, useEffect } from "react";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import ChatHeader from "./ChatHeader";
import ChatList from "./ChatList";
import io from "socket.io-client";

import { IChat } from "../../typesFile/chatType";
const socket = io("http://localhost:5000");

interface propsType {
	chats: IChat[];
}

const ChatSection: React.FC<propsType> = ({ chats }) => {
	const router = useRouter();
	const [listOfChats, setOfListOfChats] = useState([]);
	const { slug } = router.query;
	if (slug) {
		console.log(slug);
	}
	// console.log(chats);

	useEffect(() => {
		const getChatList = async () => {
			const url = "http://localhost:3000/api/chatNext";
			const options = {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			};
			console.log("here");
			const response = await fetch(url, options);

			const data = await response.json();
			console.log(data);
		};
		getChatList();
	}, []);

	useEffect(() => {
		socket.on("connect", () => {
			console.log("connect");
		});
		socket.on("disconnect", () => {
			console.log("disconnect");
		});
		socket.on("message", (val) => {
			// setWhoIsTyping("");
			setOfListOfChats([...listOfChats, val]);
		});

		// socket.on("typing", (val) => {
		// 	if (val != nickname) setWhoIsTyping(`${val} is typing...`);
		// });

		// socket.on("stop-typing", (val) => {
		// 	setWhoIsTyping("");
		// });

		return () => {
			socket.off("connect");
			socket.off("disconnect");
			socket.off("message");
			socket.off("typing");
		};
	});

	console.log(listOfChats);
	return (
		<main className='w-9/12 h-5/6 m-auto'>
			<ChatHeader />
			<ChatList />
		</main>
	);
};

// export const getStaticProps: GetStaticProps = async (context) => {
// 	const url = "http://localhost:3000/api/chatNext";
// 	const options = {
// 		method: "GET",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 	};
// 	console.log("here");
// 	const response = await fetch(url, options);

// 	const data = await response.json();
// 	// console.log(data);
// 	return {
// 		props: { chats: data }, // will be passed to the page component as props
// 		revalidate: 10, // In seconds
// 	};
// };

export default ChatSection;
