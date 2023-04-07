import React, { useState, Fragment, useEffect } from "react";
import ChatList from "./ChatList";
import ChatForm from "./ChatForm";
import io from "socket.io-client";

import { IChats } from "../../typesFile/chatType";

const socket = io("http://localhost:5000");

const Chat: React.FC<IChats> = (props) => {
	const [listOfChats, setOfListOfChats] = useState(props.chats);

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

	// const updateChatList = async () => {
	// 	const url = "/api/chatNext";
	// 	const options = {
	// 		method: "GET",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 	};
	// 	const response = await fetch(url, options);
	// 	const data = await response.json();
	// 	setOfListOfChats(data);
	// };
	// console.log(listOfChats);
	return (
		<Fragment>
			<ChatForm socket={socket} />
			<ChatList
				chats={listOfChats}
				socket={socket}
			/>
		</Fragment>
	);
};

export default Chat;
