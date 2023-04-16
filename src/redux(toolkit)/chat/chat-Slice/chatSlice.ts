import { createSlice } from "@reduxjs/toolkit";
import { IPersonalData } from "../../../typesFile/chatType";

interface IChatState {
	listOfUsers: IPersonalData[];
	currentlyChattingWith: IPersonalData;
	logInUser: IPersonalData;
}

const initialChatState: IChatState = {
	listOfUsers: [],
	currentlyChattingWith: {} as IPersonalData,
	logInUser: {} as IPersonalData,
};

const chatSlice = createSlice({
	name: "Chat Slice",
	initialState: initialChatState,
	reducers: {
		updateLogInUser(state, action) {
			state.logInUser = action.payload.userLogIn;
		},

		getAllUsers(state, action) {
			state.listOfUsers = action.payload.listOfUsers;
		},
		updateChattingWith(state, action) {
			state.currentlyChattingWith = action.payload.currentUser;
		},
	},
});

export const { updateLogInUser, getAllUsers, updateChattingWith } =
	chatSlice.actions;
export const homeInitialState = initialChatState;
export default chatSlice;
