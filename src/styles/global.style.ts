import { css } from '@emotion/react'

const GlobalStyle = css`
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  body,
  button,
  input {
    font-family: 'gmarket-sans';
  }

  body {
    overflow: hidden;
    overscroll-behavior: contain;
  }

  html,
  body {
    width: 100vw;
    height: 100vh;
    width: calc(var(--vw, 1vw) * 100);
    height: calc(var(--vh, 1vh) * 100);
  }

  select,
  input,
  button,
  textarea {
    border: 0;
    outline: 0 !important;
  }

  @font-face {
    font-family: 'gmarket-sans';
    font-weight: 400;
    src: url('/fonts/GmarketSansTTFLight.ttf') format('truetype');
    font-style: normal;
  }

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
