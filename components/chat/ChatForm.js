import React, { useRef } from "react";

const ChatForm = ({ onUpdateChats }) => {
	const senderRef = useRef();
	const receiverRef = useRef();
	const messageRef = useRef();

	const sendChatToApi = async (chatData) => {
		const url = "/api/chatNext";
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(chatData),
		};
		const response = await fetch(url, options);
		console.log(response);
		if (response.ok) {
			onUpdateChats();
		}
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const senderInput = senderRef.current.value;
		const receiverInput = receiverRef.current.value;
		const messageInput = messageRef.current.value;

		if (
			!senderInput ||
			!receiverInput ||
			!messageInput ||
			senderInput.trim().length === 0 ||
			receiverInput.trim().length === 0 ||
			messageInput.trim().length === 0
		) {
			console.log("invalid input");
			return;
		}

		const newChat = {
			sender: senderInput,
			receiver: receiverInput,
			message: messageInput,
		};
		// console.log(newChat);
		sendChatToApi(newChat);
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
