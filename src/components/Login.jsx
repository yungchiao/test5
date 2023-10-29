// import { useDispatch, useSelector } from "react-redux";
// import { userLogout } from "../redux/Action";
import styled from "styled-components";

const Title = styled.p`
  margin-right: 10px;
`;
const Button = styled.button`
  display: flex;
  cursor: pointer;
  background-color: black;
  color: #fff;
  border: none;
  width: 80px;
  height: 30px;
  padding: auto auto;
`;
const ButtonA = styled.p`
  margin: auto auto;
`;
const ButtonContainer = styled.div`
  justify-content: center;
  gap: 20px;
  display: flex;
  margin: 30px auto;
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Line = styled.div`
  width: 300px;
  height: 1px;
  background-color: #ccc;
  margin: 20px auto;
`;
function Login() {
  // const state = useSelector((state) => state.userReducer.profile);
  // const dispatch = useDispatch();
  const handleLogout = () => {
    // dispatch(userLogout());
  };

  return (
    <div>
      <InputContainer>
        <Title>姓名 :{/* {state.name} */}</Title>
      </InputContainer>
      <InputContainer>
        <Title>年齡 :{/* {state.age} */}</Title>
      </InputContainer>
      <InputContainer>
        <Title>信箱 :{/* {state.email} */}</Title>
      </InputContainer>
      <Line />
      <ButtonContainer>
        <Button onClick={handleLogout}>
          <ButtonA>登出</ButtonA>
        </Button>
      </ButtonContainer>
    </div>
  );
}

export default Login;
