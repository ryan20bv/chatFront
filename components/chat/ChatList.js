import React from "react";
import ChatItem from "./ChatItem";

const ChatList = ({ chats, onUpdateChats }) => {
	if (chats.length === 0 || !chats) {
		return <div>Chat is empty!</div>;
	}
	return (
		<ul>
			{chats.map((chat) => (
				<ChatItem
					key={chat._id}
					chat={chat}
					onUpdateChats={onUpdateChats}
				/>
				// <li key={chat._id}>
				// 	<p>Sender: {chat.sender}</p>
				// 	<p>Receiver: {chat.receiver}</p>
				// 	<p>Message: {chat.message}</p>
				// </li>
			))}
		</ul>
	);
};

export default ChatList;
