import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Button() {
  let navigate = useNavigate();

  return (
    <>
      <h3>Button</h3>
      <ButtonWrapper>
        <ButtonComponent
          onClick={() => {
            navigate("/");
          }}
        >
          <div>Click To Home</div>
          <NextButton>
            <img src="../right-arrow.png" alt="right-arrow" />
          </NextButton>
        </ButtonComponent>
      </ButtonWrapper>
    </>
  );
}

export default Button;

const ButtonWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonComponent = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 171px;
  height: 55px;
  border: none;
  border-radius: 40px;
  background-color: #fd4f875c;
  color: #ffff;
  font-weight: bold;
  box-shadow: 0 9px 20px #af788a5c;

  &:hover {
    // padding: 10px 13px 6px;
    background-color: #ffa500;
  }
`;

const NextButton = styled.div`
  margin: -16px;
  width: 25px;
  height: 25px;
  background-color: #f33270;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 15px;
    height: 15px;
    filter: invert(100%);
  }
`;
