import React from 'react'
import * as S from '@styles/common/Layout.style'
import Header from '@components/common/Header'
import { Outlet } from 'react-router-dom'
import TierCreate from '@components/tierlist/TierCreate'

type Props = {
  modify: boolean
}

const LayoutPagePC = ({ modify }: Props) => {
  return (
    <S.LayoutContainer>
      <Header />
      <Outlet />
      {!modify && <TierCreate />}
    </S.LayoutContainer>
  )
}

export default LayoutPagePC
