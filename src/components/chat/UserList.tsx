import React from "react";
import Image from "next/image";
import classes from "./styleChat/userList.module.scss";

const UserList = () => {
	return (
		<section className={classes.user_list}>
			<div>
				<Image
					src='/'
					alt='image'
					width={100}
					height={100}
				/>

				<h5>user name</h5>
			</div>
			<div>
				<Image
					src='/'
					alt='image'
					width={100}
					height={100}
				/>

				<h5>user name</h5>
			</div>
		</section>
	);
};

export default UserList;
