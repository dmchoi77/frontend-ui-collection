import React from "react";
import styled from "styled-components";

function Badge() {
  return (
    <>
      <h3>Badge</h3>
      <BadgeWrapper>
        <h4>Outline Badge</h4>
        <div
          style={{
            padding: "4px",
            fontWeight: "bold",
            color: "#101010d9",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#6a6a6a66",
              padding: "4px",
              borderRadius: "5px",
            }}
          >
            Message
          </div>
          <Badges position="absolute" margin="50px 66px 78px">
            12
          </Badges>
        </div>

        <h4>Inline Badge</h4>
        <div
          style={{
            backgroundColor: "#6a6a6a66",
            width: "max-content",
            padding: "4px",
            fontWeight: "bold",
            color: "#101010d9",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          Message
          <Badges>10</Badges>
        </div>
      </BadgeWrapper>
    </>
  );
}

export default Badge;

const BadgeWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Badges = styled.span`
  border-radius: 20px;
  background-color: #ff3e3e;
  font-size: 4px;
  align-items: center;
  padding: 4px;
  color: #ffff;
  box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);

  // 컴포넌트에 position props 있으면 그 값을 사용하고, 없으면 relative 사용
  position: ${(props) => props.position || "relative"};
  margin: ${(props) => props.margin || "0 0 0 4px"};
`;
