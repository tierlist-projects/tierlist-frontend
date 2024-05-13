import React, { useCallback, useState } from 'react'
import * as S from '@styles/mypage/Toggle.style'
import { togglePublic } from '@apis/mypage/mypageApi'
import { TierlistErrorType } from 'types/tierlist/category.type'

type Props = {
  tierlistId: number
  initialState: boolean
}

const Toggle = ({ tierlistId, initialState }: Props) => {
  const [isPublic, setIsPublic] = useState(initialState)

  const onClickToggle: React.MouseEventHandler<HTMLDivElement> = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation()
      togglePublic(tierlistId)
        .then(() => {
          setIsPublic((prev) => !prev)
        })
        .catch((err) => {
          const data = err.response.data as TierlistErrorType

          alert(data.message)
        })
    },
    [isPublic],
  )

  return (
    <S.Container isPublic={isPublic} onClick={onClickToggle}>
      <S.Circle isPublic={isPublic} />
      <S.Text isPublic={isPublic}>{isPublic ? '공개' : '비공개'}</S.Text>
    </S.Container>
  )
}

export default Toggle
