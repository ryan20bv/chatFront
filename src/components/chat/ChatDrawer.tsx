import React from "react";
import UserList from "./UserList";
import classes from "./styleChat/chatDrawer.module.scss";
const ChatDrawer = () => {
	return (
		<main className={classes.chat_Drawer}>
			<header>
				<h1>LOGO</h1>
			</header>
			<section className={classes.welcome}>
				<h3>Hi User!</h3>
			</section>
			<section className={classes.search_bar}>
				<input
					type='text'
					placeholder='Find user'
				/>
			</section>
			<section className={classes.list}>
				<UserList />
			</section>
		</main>
	);
};

export default ChatDrawer;
