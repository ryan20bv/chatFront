import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import Logo from "./Logo";
import classes from "./styles-layout/mainNav.module.scss";

const MainNavigation = () => {
	return (
		<header className={classes.mainNav}>
			<Link href='/'>
				<Logo />
			</Link>

			<nav>
				<ul>
					<li>
						<NavLink href='/chat'>Chat</NavLink>
					</li>
					<li>
						<NavLink href='/login'>Login</NavLink>
					</li>
					<li>
						<NavLink href='/logout'>LogOut</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
