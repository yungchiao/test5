import { useRef } from "react";
// import { useDispatch } from "react-redux";
// import { userLogin } from "../redux/Action";
import styled from "styled-components";

const Input = styled.input`
  width: 300px;
  height: 30px;
  display: block;
  border: 1px solid #ccc;
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
`;
const Title = styled.p`
  margin-right: 10px;
`;
const Button = styled.button`
  display: flex;
  margin-top: 10px;
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
function NotLogin() {
  // const dispatch = useDispatch();
  // const nameRef = useRef();
  // const ageRef = useRef();
  // const emailRef = useRef();
  const handleLogin = () => {
    // const nameValue = nameRef.current.value;
    // const ageValue = ageRef.current.value;
    // const emailValue = emailRef.current.value;
    // dispatch(userLogin({ name: nameValue, age: ageValue, email: emailValue }));
  };
  return (
    <div>
      <InputContainer>
        <label htmlFor="name">
          <Title>姓名</Title>
        </label>
        <Input
          type="text"
          placeholder="name"
          name="name"
          id="name"
          // ref={nameRef}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="age">
          <Title>年齡</Title>
        </label>
        <Input
          type="text"
          placeholder="age"
          name="age"
          id="age"
          // ref={ageRef}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="email">
          <Title>信箱</Title>
        </label>
        <Input
          type="text"
          placeholder="email"
          name="email"
          id="email"
          // ref={emailRef}
        />
      </InputContainer>
      <ButtonContainer>
        <Button onClick={handleLogin}>
          <ButtonA>登入</ButtonA>
        </Button>
      </ButtonContainer>
    </div>
  );
}

export default NotLogin;
