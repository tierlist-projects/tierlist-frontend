import HeaderMobile from '@components/common/mobile/HeaderMobile'
import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutPageMobile = () => {
  return (
    <>
      <HeaderMobile />
      <Outlet />
    </>
  )
}

export default LayoutPageMobile
