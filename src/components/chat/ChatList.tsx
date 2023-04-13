import React, { Fragment } from "react";
import ChatForm from "./ChatForm";

const ChatList = () => {
	return (
		<Fragment>
			<section className='w-full border border-black bg-slate-300 h-4/6 rounded-t-xl'>
				<div className=''>ChatList chat</div>
			</section>
			<ChatForm />
		</Fragment>
	);
};

export default ChatList;
