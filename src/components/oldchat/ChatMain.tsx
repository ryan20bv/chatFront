import React from "react";
import Chat from "./Chat";
import styles from "./chatStyles/Home.module.scss";
import { IChat } from "../../typesFile/chatType";

interface propsType {
	chatData: IChat[];
}

const ChatMain: React.FC<propsType> = ({ chatData }) => {
	return (
		<main className={styles.main}>
			<div>
				<h1>Home Page</h1>
				<Chat chats={chatData} />
			</div>
		</main>
	);
};

export default ChatMain;
