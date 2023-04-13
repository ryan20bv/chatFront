import React from "react";
import UserList from "./UserList";

const ChatDrawer = () => {
	return (
		<main className='w-2/12 border border-black p-4 bg-slate-600 flex flex-col justify-evenly rounded-br-xl rounded-tr-xl'>
			<header className='text-center'>
				<h1 className='text-4xl'>LOGO</h1>
			</header>
			<section className=''>
				<h3>Hi User!</h3>
			</section>
			<section className='my-4'>
				<input
					type='text'
					placeholder='Find user'
					className='px-4 py-1 w-full'
				/>
			</section>
			<section className=' overflow-y-scroll bg-green-200 p-4 h-3/4'>
				<UserList />
			</section>
		</main>
	);
};

export default ChatDrawer;
