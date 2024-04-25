import React, { useCallback, useState } from 'react'
import * as S from '@styles/mypage/Toggle.style'

const Toggle = () => {
  const [isPublic, setIsPublic] = useState(false)

  const onClickToggle = useCallback(() => {
    setIsPublic(!isPublic)
  }, [isPublic])

  return (
    <S.Container isPublic={isPublic} onClick={onClickToggle}>
      <S.Circle isPublic={isPublic} />
      <S.Text isPublic={isPublic}>{isPublic ? '공개' : '비공개'}</S.Text>
    </S.Container>
  )
}

export default Toggle
