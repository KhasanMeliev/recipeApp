import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <div>
        <FaSearch style={{marginTop: '-20px;'}}></FaSearch>
        <input type="text" value={input} onChange={handleInput} />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0px 270px;
  

  div{
      width: 100%;
      position: relative;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 24px;
    color: white;
    padding: 16px 48px;
    border-radius: 16px;
    outline: none;
    width:100%;
    height:10%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform(translate(100%, -50%));
    color:white;
  }
`;

export default Search;
