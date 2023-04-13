import React from "react";
import ChatDrawer from "./ChatDrawer";
import ChatSection from "./ChatSection";
import { IPersonalData } from "../../typesFile/chatType";
interface propsType {
	userData: IPersonalData[];
}

const ChatMain: React.FC<propsType> = ({ userData }) => {
	return (
		<main className='flex w-screen h-screen py-4 bg-green-300'>
			<ChatDrawer userData={userData} />
			<ChatSection />
		</main>
	);
};

export default ChatMain;
