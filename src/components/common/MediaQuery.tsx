import React from 'react'
import { useMediaQuery } from 'react-responsive'

type Props = {
  children: React.ReactNode
}

export const Mobile = ({ children }: Props) => {
  const isMobile = useMediaQuery({
    query: '(min-width: 360px) and (max-width:1023px)',
  })

  return <>{isMobile && children}</>
}

// export const Tablet = ({ children }: Props) => {
//   const isTablet = useMediaQuery({
//     query: '(min-width: 768px) and (max-width:1023px)',
//   })

//   return <>{isTablet && children}</>
// }

export const PC = ({ children }: Props) => {
  const isPC = useMediaQuery({
    query: '(min-width: 1024px)',
  })

  return <>{isPC && children}</>
}
