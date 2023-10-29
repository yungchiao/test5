import { configureStore } from "@reduxJs/toolkit";
import userReducer from "../reducers/User";
// import userSlice from "./redux/userSlice";

const store = configureStore({
  reducer: {
    // user: userSlice,
    userReducer,
  },
});

export default store;
