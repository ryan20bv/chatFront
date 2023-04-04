import React from "react";
import ChatItem from "./ChatItem";

const ChatList = ({ chats }) => {
	return (
		<ul>
			{chats.map((chat) => (
				<ChatItem
					key={chat._id}
					chat={chat}
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
