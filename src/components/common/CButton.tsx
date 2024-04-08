import React from 'react'
import * as S from '@styles/common/CButton.style'

type Props = React.HTMLProps<HTMLButtonElement> & {
  hPadding?: number
  vPadding?: number
  radius?: number
  text: string
  fontSize?: number
  color?: string
  backgroundColor?: string
  medium?: boolean
  onClick?: () => void
}

const CButton = ({
  hPadding,
  vPadding,
  radius,
  color,
  fontSize,
  backgroundColor,
  text,
  medium,
  onClick,
}: Props) => {
  return (
    <S.Button
      hPadding={hPadding}
      vPadding={vPadding}
      radius={radius}
      color={color}
      fontSize={fontSize}
      backgroundColor={backgroundColor}
      medium={medium}
      onClick={onClick}
    >
      {text}
    </S.Button>
  )
}

export default CButton
