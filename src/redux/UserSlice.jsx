import { createSlice } from "@reduxJs/toolkit";

const initialState = {
  profile: {
    name: "",
    age: 0,
    email: "",
    login: false,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setLogin(state, action) {
      const { name, age, email } = action.payload;
      state.profile = { name, age, email, login: true };
    },
    setLogout(state) {
      state.profile = initialState;
    },
  },
});

export const { setLogin, setLogout } = userSlice.actions;
export default userSlice.reducer;
