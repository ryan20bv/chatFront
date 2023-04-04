import React from "react";
import classes from "./chatStyles/chatItem.module.scss";
const ChatItem = ({ chat }) => {
	return (
		<li className={classes.item}>
			<div>
				<p>Sender: {chat.sender}</p>
				<p>Receiver: {chat.receiver}</p>
				<p>Message: {chat.message}</p>
			</div>
		</li>
	);
};

export default ChatItem;
