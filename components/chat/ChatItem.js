import React from "react";
import classes from "./chatStyles/chatItem.module.scss";
const ChatItem = ({ chat, onUpdateChats }) => {
	const sendDeleteRequestToAPI = async (chatId) => {
		const url = `/api/chatNext/${chatId}`;

		const options = {
			method: "DELETE",
		};

		const response = await fetch(url, options);

		if (response.ok) {
			onUpdateChats();
		}
	};
	const deleteHandler = (id) => {
		// console.log(id);
		sendDeleteRequestToAPI(id);
	};
	return (
		<li className={classes.item}>
			<div>
				<p>Sender: {chat.sender}</p>
				<p>Receiver: {chat.receiver}</p>
				<p>Message: {chat.message}</p>
				<button onClick={() => deleteHandler(chat._id)}>delete</button>
			</div>
		</li>
	);
};

export default ChatItem;
