import { IPersonalData } from "../typesFile/chatType";

const randomNumber = () => {
	return Math.ceil(Math.random() * 3).toString();
};

export const data: IPersonalData[] = [
	{
		_id: "p1",
		avatarUrl: "avatar" + randomNumber() + ".jpg",
		name: "Mallory Diaz",
		email: "mallorydiaz1337@test.com",
	},
	{
		_id: "p2",
		avatarUrl: "avatar" + randomNumber() + ".jpg",
		name: "Shay Berry",
		email: "shayberry6540@test.com",
	},
	{
		_id: "p3",
		avatarUrl: "avatar" + randomNumber() + ".jpg",
		name: "Benjamin Gardner",
		email: "benjamingardner8480@test.com",
	},
	{
		_id: "p4",
		avatarUrl: "avatar" + randomNumber() + ".jpg",
		name: "Oren Stanley",
		email: "orenstanley636@test.com",
	},
	{
		_id: "p5",
		avatarUrl: "avatar" + randomNumber() + ".jpg",
		name: "Nomlanga Baxter",
		email: "nomlangabaxter8900@test.com",
	},
	{
		_id: "p6",
		avatarUrl: "avatar" + randomNumber() + ".jpg",
		name: "Magee Mcconnell",
		email: "mageemcconnell@test.com",
	},
	{
		_id: "p7",
		avatarUrl: "avatar" + randomNumber() + ".jpg",
		name: "Pearl Mack",
		email: "pearlmack@test.com",
	},
	{
		_id: "p8",
		avatarUrl: "avatar" + randomNumber() + ".jpg",
		name: "Marcia Albert",
		email: "marciaalbert@test.com",
	},
	{
		_id: "p9",
		avatarUrl: "avatar" + randomNumber() + ".jpg",
		name: "Kiona Morton",
		email: "kionamorton5496@test.com",
	},
	{
		_id: "p10",
		avatarUrl: "avatar" + randomNumber() + ".jpg",
		name: "Mercedes Lang",
		email: "mercedeslang@test.com",
	},
	{
		_id: "p11",
		avatarUrl: "avatar" + randomNumber() + ".jpg",
		name: "Julie Jarvis",
		email: "juliejarvis4907@test.com",
	},
	{
		_id: "p12",
		avatarUrl: "avatar" + randomNumber() + ".jpg",
		name: "Raya Beard",
		email: "rayabeard@test.com",
	},
	{
		_id: "p13",
		avatarUrl: "avatar" + randomNumber() + ".jpg",
		name: "Kelsey Pollard",
		email: "kelseypollard959@test.com",
	},
	{
		_id: "p14",
		avatarUrl: "avatar" + randomNumber() + ".jpg",
		name: "Stuart Strong",
		email: "stuartstrong7036@test.com",
	},
	{
		_id: "p15",
		avatarUrl: "avatar" + randomNumber() + ".jpg",
		name: "Robert Mullen",
		email: "robertmullen@test.com",
	},
];

export const getAllDummyData = () => {
	return data;
};
