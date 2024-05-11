import React from 'react'
import * as S from '@styles/tierlist/Item.style'

type Props = {
  name: string
  itemRankImage: string
}

const Item = ({ name, itemRankImage }: Props) => {
  return (
    <S.Container>
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
