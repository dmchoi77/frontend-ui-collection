import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Toggle from "../Toggle";
import Modal from "../Modal";
import Tab from "../Tab";
import Tag from "../Tag";
import Accordion from "../Accordion";
import Button from "../Button";
import Stepper from "../Stepper";
import Form from "../Form";

function Content() {
  return (
    <ContentWrapper>
      <Routes>
        <Route path="toggle" element={<Toggle />} />
        <Route path="modal" element={<Modal />} />
        <Route path="tab" element={<Tab />} />
        <Route path="tag" element={<Tag />} />
        <Route path="accordion" element={<Accordion />} />
        <Route path="button" element={<Button />} />
        <Route path="stepper" element={<Stepper />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </ContentWrapper>
  );
}

export default Content;

const ContentWrapper = styled.div`
  padding: 50px;
  // position: absolute;
  top: 70px;
  left: 200px;
  // width: 800px;
`;
