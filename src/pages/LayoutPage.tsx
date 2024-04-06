import React from 'react'
import * as S from '@styles/common/Layout.style'
import Header from '@components/common/Header'
import { Outlet } from 'react-router-dom'

const LayoutPage = () => {
  return (
    <S.LayoutContainer>
      <Header />
      <Outlet />
    </S.LayoutContainer>
  )
}

export default LayoutPage
