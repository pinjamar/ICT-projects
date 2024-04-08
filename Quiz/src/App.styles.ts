import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20%;

  .score {
    color: gray;
    font-size: 2rem;
    margin-top: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, gold);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .category,
  .difficulty,
  .number {
    width: 100%;
    font-size: 1.4em;
    margin: 20px 0 10px;
    display: flex;
    justify-content: center;
    border-radius: 0.2em;
    background: linear-gradient(180deg, #ffffff, gold);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }
`;
