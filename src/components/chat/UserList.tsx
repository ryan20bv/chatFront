import React from "react";

import UserItem from "./UserItem";
import {
	useAppSelector,
	RootState,
} from "../../redux(toolkit)/store/indexStore";

const UserList = () => {
	const { listOfUsers } = useAppSelector(
		(state: RootState) => state.chatReducer
	);

	return (
		<ul className=''>
			{listOfUsers.map((user) => (
				<UserItem
					key={user._id}
					user={user}
				/>
			))}
		</ul>
	);
};

export default UserList;
