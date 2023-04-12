import Link from "next/link";
import { useRouter } from "next/router";

interface propsType {
	href: string;
	children: string;
}

const NavLink: React.FC<propsType> = ({ href, children }) => {
	const router = useRouter();
	const isActive = router.pathname === href;

	const activeStyles = {
		fontWeight: "bold",
		color: "red",
	};

	return (
		<Link
			href={href}
			style={isActive ? activeStyles : {}}
		>
			{children}
		</Link>
	);
};

export default NavLink;
