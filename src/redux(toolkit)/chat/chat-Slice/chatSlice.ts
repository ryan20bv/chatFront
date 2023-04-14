import { createSlice } from "@reduxjs/toolkit";
import { IPersonalData } from "../../../typesFile/chatType";

interface IChatState {
	listOfUsers: IPersonalData[];
}

const initialChatState: IChatState = {
	listOfUsers: [],
};

const chatSlice = createSlice({
	name: "Chat Slice",
	initialState: initialChatState,
	reducers: {
		getAllUsers(state, action) {
			state.listOfUsers = action.payload.listOfUsers;
		},
	},
});

export const { getAllUsers } = chatSlice.actions;
export const homeInitialState = initialChatState;
export default chatSlice;
