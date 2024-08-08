import React from 'react'
import * as S from '@styles/common/Layout.style'
import { Outlet } from 'react-router-dom'
import TierCreate from '@components/tierlist/TierCreate'
import HeaderPC from '@components/common/pc/HeaderPC'
import { Mobile, PC, Tablet } from '@components/common/MediaQuery'
import HeaderMobile from '@components/common/mobile/HeaderMobile'

type Props = {
  modify: boolean
}

const LayoutPagePC = ({ modify }: Props) => {
  return (
    <S.LayoutContainer>
      <Mobile>
        <HeaderMobile />
      </Mobile>
      <Tablet>
        <HeaderMobile />
      </Tablet>
      <PC>
        <HeaderPC />
      </PC>
      <Outlet />
      {!modify && <TierCreate />}
    </S.LayoutContainer>
  )
}

export default LayoutPagePC
