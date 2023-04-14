import { getAllDummyData } from "../../../dummyData/DUMMY_DATA";
import {
	updateLogInUser,
	getAllUsers,
	updateChattingWith,
} from "../chat-Slice/chatSlice";

export const loadUserListsAction =
	() => async (dispatch: any, getState: any) => {
		const data = getAllDummyData();

		await dispatch(getAllUsers({ listOfUsers: data }));
		const { listOfUsers } = getState().chatReducer;

		dispatch(updateChattingWithAction(listOfUsers[0]));
	};

export const logInUserAction = (data) => async (dispatch: any) => {
	console.log("logging in user");
};

export const updateChattingWithAction = (userData) => async (dispatch: any) => {
	dispatch(updateChattingWith({ currentUser: userData }));
};
