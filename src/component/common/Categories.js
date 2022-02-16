import React from "react";
import styled from "styled-components";

import { Link, Routes, Route } from "react-router-dom";

function Categories() {
  return (
    <CategoriesWrapper>
      <Link to="/toggle">Toggle</Link>
      <Link to="/modal">Modal</Link>
      <Link to="/tab">Tab</Link>
      <Link to="/tag">Tag</Link>
      <Link to="/accordion">Accordion</Link>
      <Link to="/button">Button</Link>
      <Link to="/stepper">Stepper</Link>
    </CategoriesWrapper>
  );
}

export default Categories;

const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 50px;

  a {
    font-weight: bold;
  }
`;
