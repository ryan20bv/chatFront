import React from "react";
import {
	useAppSelector,
	RootState,
} from "../../redux(toolkit)/store/indexStore";
import classes from "./styleChat/chatHeader.module.scss";

const ChatHeader = () => {
	const { currentlyChattingWith } = useAppSelector(
		(state: RootState) => state.chatReducer
	);

	console.log(currentlyChattingWith);

	return (
		<header
			className={`bg-white text-2xl px-5 py-1 mb-8 rounded-xl ${classes.chat_header}`}
		>
			{currentlyChattingWith.name}
		</header>
	);
};

export default ChatHeader;
