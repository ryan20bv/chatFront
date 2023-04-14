import React from "react";
import Image from "next/image";
import { useAppDispatch } from "../../redux(toolkit)/store/indexStore";
import { updateChattingWithAction } from "../../redux(toolkit)/chat/chat-Action/chatAction";
import { IPersonalData } from "../../typesFile/chatType";

interface propsType {
	user: IPersonalData;
}

const UserItem: React.FC<propsType> = ({ user }) => {
	const dispatch = useAppDispatch();
	const selectToChatWithHandler = () => {
		dispatch(updateChattingWithAction(user));
	};
	return (
		<li
			className='flex items-start mb-3'
			onClick={selectToChatWithHandler}
		>
			<Image
				src={`/images/avatar/${user.avatarUrl}`}
				alt='image'
				width={100}
				height={100}
				className='border border-black rounded-full w-8 h-8'
			/>

			<h5 className='mx-3 text-sm'>{user.name}</h5>
		</li>
	);
};

export default UserItem;
