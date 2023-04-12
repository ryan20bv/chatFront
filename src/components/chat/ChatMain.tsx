import React from "react";
import ChatDrawer from "./ChatDrawer";
import ChatSection from "./ChatSection";
import classes from "./styleChat/chatMain.module.scss";

const ChatMain = () => {
	return (
		<main className={classes.chatMain}>
			<ChatDrawer />
			<ChatSection />
		</main>
	);
};

export default ChatMain;
