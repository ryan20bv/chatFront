export interface IChat {
	_id: string;
	sender: string;
	receiver: string;
	message: string;
}

export interface IChats {
	chats: IChat[];
}

// import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
