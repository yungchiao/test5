import { useSelector } from "react-redux";
import Login from "./Login";
import NotLogin from "./NotLogin";
import styled from "styled-components";
const Headline = styled.h1`
  margin-top: 30px;
  text-align: center;
`;

const LoginContainer = styled.div`
  width: 500px;
  margin: 30vh auto;
  border: 1px solid #ccc;
`;

function Profile() {
  // const state = useSelector((state) => state.userReducer.profile);

  return (
    <LoginContainer>
      <Headline>Profile Info</Headline>
      <Login />
      <hr />
      <NotLogin />
      {/* {state.login ? <Login /> : <NotLogin />} */}
    </LoginContainer>
  );
}

export default Profile;
