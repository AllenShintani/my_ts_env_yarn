import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import "./App.css";

const CustomButton = styled.button`
  color: red;
  font-weight: bold;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <CustomButton>
          寿限無寿限無後光の擦り切れ回砂利水魚の水行末風来松雲来松くうねる所に住むところ藪ら工事のブラ工事ぱいぽパイポパイ
        </CustomButton>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
