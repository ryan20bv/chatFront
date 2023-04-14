import React, { Fragment } from "react";

import ChatForm from "./ChatForm";
import ChatItem from "./ChatItem";

const ChatList = () => {
	return (
		<Fragment>
			<section className='w-full border border-black bg-slate-300 h-4/6 rounded-t-xl'>
				<ul className=' mx-4 h-full overflow-y-scroll'>
					<ChatItem />
					<ChatItem />
					<ChatItem />
					<ChatItem />
					<ChatItem />
					<ChatItem />
					<ChatItem />
					<ChatItem />
					<ChatItem />
				</ul>
			</section>
			<ChatForm />
		</Fragment>
	);
};

export default ChatList;
