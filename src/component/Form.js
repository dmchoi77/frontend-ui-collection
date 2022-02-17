import React, { useState } from "react";
import styled from "styled-components";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value.trim());
  };

  const emailHandler = (e) => {
    setEmail(e.target.value.trim());
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
    console.log(phone);
  };

  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const sumbitHandler = (e) => {
    // 유효성 검사
    let regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    let regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

    if (!regPhone.test(phone)) {
      return alert("잘못된 전화번호 형식입니다.");
    }
    if (!regEmail.test(email)) {
      return alert("잘못된 이메일 형식입니다.");
    }
  };

  return (
    <>
      <h2>Form</h2>
      <FormWrapper>
        <h2>Contact Me</h2>
        <FormContent>
          <InputBox title={"Name"} handler={nameHandler} />
          <InputBox title={"Email"} handler={emailHandler} />
          <InputBox title={"Phone"} handler={phoneHandler} />
          <div>
            <label>Your Message</label>
            <textarea className="MessageBox" onChange={messageHandler} />
          </div>
          <div>
            <button onClick={sumbitHandler}>SUBMIT</button>
          </div>
        </FormContent>
      </FormWrapper>
    </>
  );
}

export default Form;

function InputBox({ title, handler }) {
  return (
    <div>
      <label>{title}</label>
      <input onChange={handler} />
    </div>
  );
}

const FormWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
`;

const FormContent = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  input {
    width: 300px;
    height: 30px;
    border: 2px solid #e9e9e9e6;
  }

  div {
    display: flex;
    flex-direction: column;
    margin: 10px;
  }

  label {
    padding: 5px;
    font-weight: bold;
  }

  .MessageBox {
    width: 300px;
    height: 300px;
    padding: 5px;

    scrollbar-face-color: #ffffff;
    scrollbar-shadow-color: BLACK;
    scrollbar-highlight-color: BLACK;
    scrollbar-3dlight-color: #ffffff;
    scrollbar-darkshadow-color: #ffffff;
    scrollbar-track-color: #ffffff;
    scrollbar-arrow-color: #6600ff;
    border: 0;
    border-width: 1;
    border-style: solid;
    border-color: white;
    border-style: groove;
    border-color: white;

    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: bottom right;
    font-family: 돋움, arial;
    font-size: 12px;
    font-family: Verdana;
    font-style: normal;
    font-weight: bold;
    font-size: 8pt;
    scroll: none;
    overflow-x: hidden;
    overflow-y: hidden;
    overflow-y: auto;
    color: #333333;
    line-height: 120%;
  }

  button {
    border: none;
    background-color: #f57676;
    width: 100px;
    height: 30px;
    color: #ffff;
    font-weight: bold;
    cursor: pointer;
  }

  input {
    padding: 5px;
  }
`;
