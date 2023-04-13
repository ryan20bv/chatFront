import React from "react";
import Image from "next/image";
const UserItem = () => {
	return (
		<li className='flex items-start mb-3'>
			<Image
				src='/'
				alt='image'
				width={100}
				height={100}
				className='border border-black rounded-full w-8 h-8'
			/>

			<h5 className='mx-3 text-sm'>user name</h5>
		</li>
	);
};

export default UserItem;
