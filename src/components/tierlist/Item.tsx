import React from 'react'
import * as S from '@styles/tierlist/Item.style'
import { ReactComponent as Remove } from '@assets/icon/x.svg'

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
          aria-label="아이템 삭제 버튼"
        >
          <Remove width={12} height={12} fill="black" />
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
