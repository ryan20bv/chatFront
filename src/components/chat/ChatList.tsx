import React from "react";
import ChatForm from "./ChatForm";
import classes from "./styleChat/chatList.module.scss";

const ChatList = () => {
	return (
		<section className={classes.chat_list}>
			<div className={classes.list_chat}>ChatList chat</div>

			<div className={classes.list_form}>
				<ChatForm />
			</div>
		</section>
	);
};

export default ChatList;
