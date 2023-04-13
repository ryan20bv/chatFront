import React from "react";

const ChatForm = () => {
	return (
		<form className={`border border-red-600 h-1/5 flex rounded-b-xl`}>
			<textarea
				name=''
				id=''
				// cols={30}
				rows={5}
				placeholder='message here!'
				className='w-11/12 h-full rounded-bl-xl'
			></textarea>
			<button className='w-1/12 border h-full bg-green-600 rounded-br-xl'>
				SEND
			</button>
		</form>
	);
};

export default ChatForm;
