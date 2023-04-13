import React from "react";

import UserItem from "./UserItem";

import { IPersonalData } from "../../typesFile/chatType";
interface propsType {
	userData: IPersonalData[];
}
const UserList: React.FC<propsType> = ({ userData }) => {
	return (
		// <section className={classes.user_list}>
		<ul className=''>
			{userData.map((user) => (
				<UserItem
					key={user._id}
					user={user}
				/>
			))}
		</ul>
	);
};

export default UserList;
