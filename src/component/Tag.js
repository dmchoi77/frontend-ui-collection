import React from "react";
import styled from "styled-components";

export default function Tag() {
  const handlekeyPress = (e) => {
    if (e.key === "Enter") {
      if (e.target.value === "") {
        return;
      }

      let $newDiv = document.createElement("div");
      let $newTag = document.createTextNode("# " + e.target.value);
      let $tags = document.getElementsByClassName("tag-list");

      $newDiv.appendChild($newTag);

      // Tag CSS
      Object.assign($newDiv.style, {
        backgroundColor: "#4e2cb1",
        color: "#ffff",
        borderRadius: "35%",
        padding: "6px",
        cursor: "pointer",
      });

      // 클릭 시 태그 제거
      $newDiv.addEventListener("click", (e) => {
        e.target.remove();
      });

      $tags[0].appendChild($newDiv);
      e.target.value = "";
    }
  };
  return (
    <>
      <h3>Tag</h3>
      <TagWrapper>
        <div
          style={{
            display: "flex",
            width: "500px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TagInput
            type="text"
            placeholder="Press enter to add tags"
            onKeyUp={handlekeyPress}
          ></TagInput>
          <div
            className="tag-list"
            style={{
              padding: "15px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          />
        </div>
      </TagWrapper>
    </>
  );
}

const TagWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const TagInput = styled.input`
  width: 100%;
  height: 40px;
`;
