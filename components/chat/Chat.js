import React from "react";
import ChatList from "./ChatList";
import ChatForm from "./ChatForm";

const Chat = (props) => {
	return (
		<div>
			<ChatForm />
			<ChatList chats={props.chats} />
		</div>
	);
};

export default Chat;
