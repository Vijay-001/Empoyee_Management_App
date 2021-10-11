import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import Thunk from "redux-thunk";

const middleware: any = [];
if (process.env.NODE_ENV === "development") {
  middleware.push(Thunk);
}

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export type IStateReduced = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;
