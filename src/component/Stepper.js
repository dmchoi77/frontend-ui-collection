import React, { useState } from "react";
import styled from "styled-components";

export default function Stepper() {
  const [number, setNumber] = useState(0);

  const inputHandler = (e) => {
    let operator = e.target.innerHTML;

    if (operator === "+") setNumber((number) => number + 1);
    else if (operator === "-") setNumber((number) => number - 1);
  };

  return (
    <>
      <h3>Stepper</h3>
      <StepperWrapper>
        <StepperComponent>
          <StepperButton operator={"minus"} onClick={inputHandler}>
            -
          </StepperButton>
          <StepperInput value={number} />
          <StepperButton operator={"plus"} onClick={inputHandler}>
            +
          </StepperButton>
        </StepperComponent>
      </StepperWrapper>
    </>
  );
}

const StepperWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StepperComponent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const StepperButton = styled.div`
  width: 80px;
  height: 80px;
  font-size: 30px;
  text-align: center;
  color: #ffff;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  font-weight: bold;

  background-color: ${({ operator }) => {
    if (operator === "minus") return "#b8c6ff";
    else return "#9e66cf";
  }};
`;

const StepperInput = styled.input`
  width: 300px;
  border: 2px solid #bbbbbb;
  border-radius: 28px;
  text-align: center;
  font-size: 40px;
`;
