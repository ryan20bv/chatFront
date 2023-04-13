import React from "react";
import classes from "./styleChat/chatHeader.module.scss";

const ChatHeader = () => {
	return (
		<header
			className={`bg-white text-2xl px-5 py-1 mb-8 rounded-xl ${classes.chat_header}`}
		>
			ChatHeader
		</header>
	);
};

export default ChatHeader;
