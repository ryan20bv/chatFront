import React from "react";
import classes from "./styleChat/chatForm.module.scss";

const ChatForm = () => {
	return (
		<form className={classes.chat_form}>
			<textarea
				name=''
				id=''
				// cols={30}
				rows={5}
				placeholder='message here!'
			></textarea>
			<button>SEND</button>
		</form>
	);
};

export default ChatForm;
