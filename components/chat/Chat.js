import React, { useState } from "react";
import ChatList from "./ChatList";
import ChatForm from "./ChatForm";

const Chat = (props) => {
	const [listOfChats, setOfListOfChats] = useState(props.chats);

	const updateChatList = async () => {
		const url = "/api/chatNext";
		const options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		};
		const response = await fetch(url, options);
		const data = await response.json();
		setOfListOfChats(data);
	};
	return (
		<div>
			<ChatForm onUpdateChats={updateChatList} />
			<ChatList chats={listOfChats} />
		</div>
	);
};

export default Chat;
