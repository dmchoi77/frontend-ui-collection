import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderWrapper>
      <Title>Front-end UI Collection</Title>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  background-color: #0087ffd6;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  color: #ffff;
  font-size: 30px;
  font-weight: bold;
`;
