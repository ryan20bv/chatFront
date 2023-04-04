import React, { useRef } from "react";

const ChatForm = () => {
	const senderRef = useRef();
	const receiverRef = useRef();
	const messageRef = useRef();

	const submitHandler = (e) => {
		e.preventDefault();
		const newChat = {
			sender: senderRef.current.value,
			receiver: receiverRef.current.value,
			message: messageRef.current.value,
		};
		console.log(newChat);
	};
	return (
		<form onSubmit={submitHandler}>
			<input
				type='text'
				placeholder='Sender'
				ref={senderRef}
			/>
			<input
				type='text'
				placeholder='Receiver'
				ref={receiverRef}
			/>
			<input
				type='text'
				placeholder='Message'
				ref={messageRef}
			/>
			<button type='submit'>Send</button>
		</form>
	);
};

export default ChatForm;
