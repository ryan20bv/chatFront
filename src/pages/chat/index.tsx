import React, { Fragment } from "react";
import ChatMain from "../../components/chat/ChatMain";

import { getAllDummyData } from "../../dummyData/DUMMY_DATA";
import { IPersonalData } from "../../typesFile/chatType";

interface propsType {
	userData: IPersonalData[];
}

const index: React.FC<propsType> = (props) => {
	return (
		<Fragment>
			<ChatMain userData={props.userData} />
		</Fragment>
	);
};

export async function getStaticProps(context) {
	const userData = getAllDummyData();

	return {
		props: { userData }, // will be passed to the page component as props
	};
}

export default index;
