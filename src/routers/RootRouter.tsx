import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LayoutPage from 'pages/LayoutPage'
import MainPage from 'pages/MainPage'

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutPage />}>
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RootRouter
