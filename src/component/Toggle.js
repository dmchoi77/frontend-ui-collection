import React, { useState } from "react";
import styled from "styled-components";

function Toggle() {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((val) => !val);
  };

  return (
    <>
      <h3>Toggle</h3>
      <ToggleWrapper>
        <ToggleBox id="checkbox" type="checkbox" />
        <ToggleLabel htmlFor="checkbox" onClick={toggleHandler} />
        {!toggle ? (
          <ToggleMessage>Toggle Switch ON</ToggleMessage>
        ) : (
          <ToggleMessage>Toggle Switch OFF</ToggleMessage>
        )}
      </ToggleWrapper>
    </>
  );
}
export default Toggle;

const ToggleWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ToggleLabel = styled.label`
  position: relative;
  top: 0;
  left: 0;
  width: 60px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 18px;
    border-radius: 50%;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
  }
`;

const ToggleBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  display: none;

  &:checked + ${ToggleLabel} {
    background: #4e2cb1;
    &::after {
      content: "";
      display: block;
      width: 18px;
      border-radius: 50%;
      height: 18px;
      transition: 0.5s;
      margin-left: 37px;
    }
  }
`;

const ToggleMessage = styled.div`
  margin-top: 10px;
  font-size: 5px;
`;
