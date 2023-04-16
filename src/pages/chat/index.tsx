import React, { Fragment, useEffect } from "react";
import { useRouter } from "next/router";
import {
	useAppDispatch,
	useAppSelector,
	RootState,
} from "../../redux(toolkit)/store/indexStore";
import { loadUserListsAction } from "../../redux(toolkit)/chat/chat-Action/chatAction";
import ChatMain from "../../components/chat/ChatMain";

const ChatPage = (props) => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const { listOfUsers } = useAppSelector(
		(state: RootState) => state.chatReducer
	);
	useEffect(() => {
		dispatch(loadUserListsAction());
	}, [dispatch]);

	// console.log(listOfUsers);
	// if (listOfUsers.length === 0 || !listOfUsers) {
	// 	return <div>LOADING...</div>;
	// }
	if (listOfUsers.length > 0) {
		const firstUserOnList = listOfUsers[0];
		router.push(`/chat/${firstUserOnList._id}`);
	}
	return (
		<main className='flex w-screen h-screen py-4 bg-green-300'>
			{/* <ChatDrawer />
			<ChatSection /> */}
			<div>LOADING...</div>
		</main>
	);
};

export default ChatPage;
