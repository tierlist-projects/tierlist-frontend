import React from 'react'
import { useMediaQuery } from 'react-responsive'

type Props = {
  children: React.ReactNode
}

const Mobile = ({ children }: Props) => {
  const isMobile = useMediaQuery({
    query: '(min-width: 360px) and (max-width:767px)',
  })

  return <>{isMobile && children}</>
}

const Tablet = ({ children }: Props) => {
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width:1023px)',
  })

  return <>{isTablet && children}</>
}

const PC = ({ children }: Props) => {
  const isPC = useMediaQuery({
    query: 'min-width: 1024px',
  })

  return <>{isPC && children}</>
}

export default { Mobile, Tablet, PC }
