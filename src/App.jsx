import { useState } from "react";
import { Provider } from "react-redux";
import userSlice from "./redux/userSlice";
import Profile from "./components/Profile";
import { configureStore } from "@reduxJs/toolkit";

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
function App() {
  return (
    <>
      <Provider store={store}>
        <Profile />
      </Provider>
    </>
  );
}

export default App;
