import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LayoutPage from 'pages/LayoutPage'
import MainPage from 'pages/MainPage'
import SignUpPage from 'pages/SignUpPage'
import MyPage from 'pages/MyPage'

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutPage />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RootRouter
