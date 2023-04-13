import React from "react";
import ChatDrawer from "./ChatDrawer";
import ChatSection from "./ChatSection";

const ChatMain = () => {
	return (
		<main className='flex w-screen h-screen py-4 bg-green-300'>
			<ChatDrawer />
			<ChatSection />
		</main>
	);
};

export default ChatMain;
