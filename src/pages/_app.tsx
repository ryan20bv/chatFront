import { Fragment } from "react";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
	return (
		<Fragment>
			<Head>
				<title>Next Chat</title>
				<meta
					http-equiv='Content-Type'
					content='text/html;charset=UTF-8'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
				<meta
					name='description'
					content='Simple Chat app using next js,typescript, sass, socket.io, nodeJs, express, mongoDB'
				/>
			</Head>
			<Component {...pageProps} />
		</Fragment>
	);
}
