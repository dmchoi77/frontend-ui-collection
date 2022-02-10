import React, { useState } from "react";
import styled from "styled-components";

export default function Modal() {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((val) => !val);
  };

  return (
    <>
      <h3>Modal</h3>

      <ModalWrapper>
        <ModalButton onClick={toggleHandler}>Open Modal</ModalButton>
        {toggle ? (
          <>
            <ModalShow>
              <button
                onClick={toggleHandler}
                style={{
                  position: "relative",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                X
              </button>
              <div style={{ marginTop: "10px" }}>Hello</div>
            </ModalShow>
            <ModalBG></ModalBG>
          </>
        ) : null}
      </ModalWrapper>
    </>
  );
}

const ModalWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalButton = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 20px;
  border-style: none;
  background-color: #4e2cb1;
  color: #ffff;
  cursor: pointer;
  box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
`;

const ModalShow = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 77px;
  width: 300px;
  height: 72px;
  background-color: #ffff;
  border-radius: 20px;
  margin: 0 auto;
  z-index: 51;
`;

const ModalBG = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  inset: 0px;
  z-index: 50;
`;
