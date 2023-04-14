import React from "react";
import Image from "next/image";
const randomNumber = () => {
	return Math.ceil(Math.random() * 3).toString();
};
const DummyPerson = {
	_id: "p1",
	avatarUrl: "avatar" + randomNumber() + ".jpg",
	name: "Mallory Diaz",
	email: "mallorydiaz1337@test.com",
};

const ChatItem = () => {
	return (
		<li className='my-3'>
			<div className=' border border-red-600 w-3/4 flex rounded-xl p-1'>
				<Image
					src={`/images/avatar/${DummyPerson.avatarUrl}`}
					alt='image'
					width={100}
					height={100}
					className='rounded-full w-10 h-10'
				/>
				<p className='ml-3'>
					hi asd ad ad asd asdada sd asdasd ad ad asd as ad as ad asd asd asd a sas
					ad s ad asd as da as asdasd asd asds asdasd sad asd asd
				</p>
			</div>
		</li>
	);
};

export default ChatItem;
