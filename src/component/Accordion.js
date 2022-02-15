import React, { useState } from "react";
import styled, { css } from "styled-components";

function Accordion() {
  const [isActive, setIsActive] = useState(false);
  console.log(isActive);
  return (
    <>
      <h3>Accordion</h3>
      <AccordionWrapper>
        <AccordionTittle onClick={() => setIsActive((value) => !value)}>
          <div>What is Accordion?</div>
          <div>{isActive ? "-" : "+"}</div>
        </AccordionTittle>
        <AccordionContent isActive={isActive}>
          An accordion is used to show (and hide) HTML content. <br />
          Use the w3-hide class to hide the accordion content.
          <br /> Use any kind of button to open and close the content
        </AccordionContent>
      </AccordionWrapper>
    </>
  );
}

export default Accordion;

const AccordionWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AccordionTittle = styled.div`
  width: 500px;
  background-color: #926dff;
  color: #ffff;
  display: flex;
  justify-content: space-between;
  padding: 25px;
  cursor: pointer;

  &:hover {
    background-color: #351889;
  }
`;

const AccordionContent = styled.div`
  ${({ isActive }) => {
    if (isActive) {
      return css`
        border-top: 1px solid #ffff;
        width: 500px;
        padding: 25px;
        color: #ffff;
        background-color: #926dff;
        opacity: 1;
        transition: 500ms;
      `;
    } else {
      return css`
        border-top: 1px solid #ffff;
        width: 500px;
        padding: 25px;
        color: #ffff;
        background-color: #926dff;
        opacity: 0;
        transition: 500ms;
      `;
    }
  }}};
`;
