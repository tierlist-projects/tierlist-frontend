import React from 'react'
import * as S from '@styles/tierlist/Item.style'
import { images } from '@constants/images'

type Props = {
  name: string
  itemRankImage: string
  removeMode?: boolean
  onClickRemove?: (index: number) => void
  index?: number
}

const Item = ({
  name,
  itemRankImage,
  removeMode,
  onClickRemove,
  index,
}: Props) => {
  return (
    <S.Container>
      {removeMode && (
        <S.RemoveButton
          onClick={
            onClickRemove && index !== undefined
              ? () => {
                  onClickRemove(index)
                }
              : undefined
          }
        >
          <img src={images.common.close} alt="아이템 삭제 버튼" />
        </S.RemoveButton>
      )}
      {itemRankImage !== '' && (
        <S.Item
          src={`https://image.tierlist.site/tierlist/${itemRankImage}`}
          alt={name}
        />
      )}
      <S.Name>{name}</S.Name>
    </S.Container>
  )
}

export default React.memo(Item)
