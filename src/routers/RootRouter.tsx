import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LayoutPage from 'pages/LayoutPage'
import MainPage from 'pages/MainPage'
import SignUpPage from 'pages/SignUpPage'
import MyTierlistPage from 'pages/MyTierlistPage'
import TierlistModifyPage from 'pages/TierlistModifyPage'
import ListPage from 'pages/ListPage'
import TierlistDetail from 'pages/TierlistDetail'
import MyPage from 'pages/MyPage'

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutPage />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/my-tierlist" element={<MyTierlistPage />} />
          <Route path="/tierlist-modify/:id" element={<TierlistModifyPage />} />
          <Route path="/tierlist/:categoryId" element={<ListPage />} />
          <Route path="/tierlist/:categoryId/:topicId" element={<ListPage />} />
          <Route path="/tierlist-detail/:id" element={<TierlistDetail />} />
          <Route path="/mypage" element={<MyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RootRouter
