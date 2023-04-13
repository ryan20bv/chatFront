import React from "react";
import ChatHeader from "./ChatHeader";
import ChatList from "./ChatList";

const ChatSection = () => {
	return (
		<main className='w-9/12 h-5/6 m-auto'>
			<ChatHeader />
			<ChatList />
		</main>
	);
};

export default ChatSection;
