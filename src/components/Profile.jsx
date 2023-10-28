import React from "react";
import Login from "./Login";
import NotLogin from "./NotLogin";
import { useSelector } from "react-redux";

function Profile() {
  const state = useSelector((state) => state.user);
  console.log(state);
  return (
    <div>
      <h1>Profile Info</h1>
      {state.profile.login ? <Login /> : <NotLogin />}
    </div>
  );
}

export default Profile;
