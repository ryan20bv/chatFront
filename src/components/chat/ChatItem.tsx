import React from "react";

import classes from "./chatStyles/chatItem.module.scss";

import { IChat } from "../../typesFile/chatType";

interface prosType {
	chat: IChat;
}

const ChatItem: React.FC<prosType> = ({ chat }) => {
	const sendDeleteRequestToAPI = async (chatId: string) => {
		const url = `/api/chatNext/${chatId}`;

		const options = {
			method: "DELETE",
		};

		const response = await fetch(url, options);
	};
	const deleteHandler = (id: string) => {
		// console.log(id);
		sendDeleteRequestToAPI(id);
	};
	return (
		<li className={classes.item}>
			<div>
				<p>Sender: {chat.sender}</p>
				<p>Receiver: {chat.receiver}</p>
				<p>Message: {chat.message}</p>
				{/* <button onClick={() => deleteHandler(chat._id)}>delete</button> */}
			</div>
		</li>
	);
};

export default ChatItem;
