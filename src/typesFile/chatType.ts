export interface IChat {
	_id: string;
	sender: string;
	receiver: string;
	message: string;
}

export type IPersonalData = {
	_id: string;
	name: string;
	email: string;
	avatarUrl: string;
};

// export interface IChats {
// 	chats: IChat[];
// }

// import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
