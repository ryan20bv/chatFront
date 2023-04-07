import React, { useState, Fragment } from "react";
import ChatList from "./ChatList";
import ChatForm from "./ChatForm";

import { IChats } from "../../typesFile/chatType";

const Chat: React.FC<IChats> = (props) => {
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
		<Fragment>
			<ChatForm onUpdateChats={updateChatList} />
			<ChatList
				chats={listOfChats}
				onUpdateChats={updateChatList}
			/>
		</Fragment>
	);
};

export default Chat;
