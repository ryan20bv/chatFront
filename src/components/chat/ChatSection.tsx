import React from "react";
import ChatHeader from "./ChatHeader";
import ChatList from "./ChatList";
import classes from "./styleChat/chatSection.module.scss";
const ChatSection = () => {
	return (
		<main className={classes.chat_section}>
			<ChatHeader />
			<ChatList />
		</main>
	);
};

export default ChatSection;
