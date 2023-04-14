import { getAllDummyData } from "../../../dummyData/DUMMY_DATA";
import {
	updateLogInUser,
	getAllUsers,
	updateChattingWith,
} from "../chat-Slice/chatSlice";

export const loadUserListsAction =
	() => async (dispatch: any, getState: any) => {
		const data = getAllDummyData();
		console.log(data);
		await dispatch(getAllUsers({ listOfUsers: data }));
		const { listOfUsers } = getState().chatReducer;
		console.log(listOfUsers);
		dispatch(updateChattingWithAction(listOfUsers[0]));
	};

export const logInUserAction = (data) => async (dispatch: any) => {
	console.log("logging in user");
};

export const updateChattingWithAction = (userData) => async (dispatch: any) => {
	console.log(userData);
	dispatch(updateChattingWith({ currentUser: userData }));
};
