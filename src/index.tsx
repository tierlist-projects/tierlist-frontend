import React from 'react'
import ReactDOM from 'react-dom/client'
import { Global } from '@emotion/react'
import GlobalStyle from 'styles/global.style'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Global styles={GlobalStyle} />
    <App />
  </React.StrictMode>,
)
