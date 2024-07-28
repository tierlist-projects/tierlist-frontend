import React from 'react'
import * as S from '@styles/common/Layout.style'
import { Outlet } from 'react-router-dom'
import TierCreate from '@components/tierlist/TierCreate'
import HeaderPC from '@components/common/pc/HeaderPC'

type Props = {
  modify: boolean
}

const LayoutPagePC = ({ modify }: Props) => {
  return (
    <S.LayoutContainer>
      <HeaderPC />
      <Outlet />
      {!modify && <TierCreate />}
    </S.LayoutContainer>
  )
}

export default LayoutPagePC
