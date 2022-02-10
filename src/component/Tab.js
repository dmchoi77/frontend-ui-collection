import React, { useState } from "react";
import styled from "styled-components";

export default function Tab() {
  const [content, setContent] = useState("");

  const goTab = (e) => {
    setContent("Tab menu " + e.target.id);

    document
      .querySelectorAll(`input[type=checkbox]`)
      .forEach((tab) => (tab.checked = false));

    e.checked = true;
  };
  return (
    <>
      <h3>Tab</h3>
      <TabWrapper>
        <TabList>
          <TabMenu id="checkbox1" type="checkbox" />
          <TabLabel htmlFor="checkbox1" id="ONE" onClick={goTab}>
            Tab1
          </TabLabel>
          <TabMenu id="checkbox2" type="checkbox" />
          <TabLabel htmlFor="checkbox2" id="TWO" onClick={goTab}>
            Tab2
          </TabLabel>
          <TabMenu id="checkbox3" type="checkbox" />
          <TabLabel htmlFor="checkbox3" id="THREE" onClick={goTab}>
            Tab3
          </TabLabel>
        </TabList>
        <div className="contents">{content}</div>
      </TabWrapper>
    </>
  );
}

const TabWrapper = styled.div`
  justify-content: center;
  padding-top: 50px;
  cursor: pointer;

  .contents {
    font-size: 15px;
    padding-top: 100px;
    text-align: center;
  }
  div > li,
  a {
    list-style: none;
    padding: 15px;
    width: 200px;
  }
`;

const TabList = styled.div`
  display: flex;
  justify-content: center;
`;

const TabLabel = styled.label`
  color: #ffff;
  width: 200px;
  height: 40px;
  cursor: pointer;
  text-align: center;
  background-color: grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TabMenu = styled.input`
  opacity: 0;
  list-style: none;
  padding: 15px;
  width: 0px;
  display: none;
  cursor: pointer;

  &:checked + ${TabLabel} {
    background: #4e2cb1;
    transition: 0.5s;
  }
`;
