import React from 'react'
import ReactDOM from 'react-dom/client'
import { Global } from '@emotion/react'
import GlobalStyle from 'styles/global.style'
import { RecoilRoot } from 'recoil'
import { CookiesProvider } from 'react-cookie'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <RecoilRoot>
        <Global styles={GlobalStyle} />
        <App />
      </RecoilRoot>
    </CookiesProvider>
  </React.StrictMode>,
)
