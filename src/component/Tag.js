import React from "react";
import styled from "styled-components";

export default function Tag() {
  const handlekeyPress = (e) => {
    if (e.key === "Enter") {
      let $newDiv = document.createElement("div");
      let $newTag = document.createTextNode(e.target.value);
      let $tags = document.getElementsByClassName("tag-list");

      $newDiv.appendChild($newTag);
      console.log($newDiv);
      console.log($tags);
      $tags.append($newDiv);
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
            // backgroundColor: "black",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="tag-list"></div>
          <TagInput
            type="text"
            placeholder="Press enter to add tags"
            onKeyUp={handlekeyPress}
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
