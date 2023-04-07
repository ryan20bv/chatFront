import React from "react";
import ChatItem from "./ChatItem";

import { IChat } from "../../typesFile/chatType";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

interface prosType {
	chats: IChat[];
	socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

const ChatList: React.FC<prosType> = ({ chats }) => {
	if (chats.length === 0 || !chats) {
		return <div>Chat is empty!</div>;
	}
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
