import React, { FormEvent, useRef } from "react";

interface propsType {
	onUpdateChats: () => void;
}

const ChatForm: React.FC<propsType> = ({ onUpdateChats }) => {
	const senderRef = useRef(null);
	const receiverRef = useRef(null);
	const messageRef = useRef(null);

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
		// console.log(response);
		if (response.ok) {
			onUpdateChats();
		}
	};

	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
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
		senderRef.current.value = "";
		receiverRef.current.value = "";
		messageRef.current.value = "";
	};

	return (
		<form onSubmit={submitHandler}>
			<div>
				<label htmlFor='sender'>Sender</label>
				<input
					id='sender'
					type='text'
					placeholder='Sender'
					ref={senderRef}
				/>
			</div>
			<div>
				<label htmlFor='receiver'>receiver</label>

				<input
					id='receiver'
					type='text'
					placeholder='Receiver'
					ref={receiverRef}
				/>
			</div>
			<div>
				<label htmlFor='message'>Message</label>

				<input
					id='message'
					type='text'
					placeholder='Message'
					ref={messageRef}
				/>
			</div>
			<button type='submit'>Send</button>
		</form>
	);
};

export default ChatForm;
