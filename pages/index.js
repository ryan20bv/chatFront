import { Fragment } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
const HomePage = () => {
	return (
		<Fragment>
			<Head>
				<title>Simple Chat</title>
				<meta
					name='description'
					content='Simple Chat app'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
			</Head>
			<main className={styles.main}>
				<div>
					<h1>Home Page</h1>
				</div>
			</main>
		</Fragment>
	);
};

export default HomePage;
