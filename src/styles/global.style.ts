import { css } from '@emotion/react'

const GlobalStyle = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
  }

  body,
  button,
  input {
    font-family: 'gmarket-sans';
  }

  body {
    overflow-x: hidden;
  }

  body #portal {
    .modal-overlay {
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
    }
  }

  html,
  body {
    width: 100vw;
    width: calc(var(--vw, 1vw) * 100);
  }

  select,
  input,
  button,
  textarea {
    border: 0;
    outline: 0 !important;
    background-color: transparent;
  }

  ul {
    list-style: none;
  }

  /* 
  @font-face {
    font-family: 'gmarket-sans';
    font-weight: 400;
    src: url('/fonts/GmarketSansTTFLight.ttf') format('truetype');
    font-style: normal;
  } */

  @font-face {
    font-family: 'gmarket-sans';
    font-weight: 500;
    src: url('/fonts/GmarketSansTTFMedium.ttf') format('truetype');
    font-style: normal;
  }

  @font-face {
    font-family: 'gmarket-sans';
    font-weight: 700;
    src: url('/fonts/GmarketSansTTFBold.ttf') format('truetype');
    font-style: normal;
  }
`
export default GlobalStyle
