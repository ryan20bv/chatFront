import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import chatSlice from "../chat/chat-Slice/chatSlice";

const indexStore = configureStore({
	reducer: { chatReducer: chatSlice.reducer },
});

export type RootState = ReturnType<typeof indexStore.getState>;
export type AppDispatch = typeof indexStore.dispatch;

export const useAppSelector = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default indexStore;
