import React, { useEffect } from "react";
import ChatDrawer from "./ChatDrawer";
import ChatSection from "./ChatSection";
import { useAppDispatch } from "../../redux(toolkit)/store/indexStore";
import { loadUserListsAction } from "../../redux(toolkit)/chat/chat-Action/chatAction";

const ChatMain = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(loadUserListsAction());
	}, [dispatch]);
	return (
		<main className='flex w-screen h-screen py-4 bg-green-300'>
			<ChatDrawer />
			<ChatSection />
		</main>
	);
};

export default ChatMain;
