import React from 'react'
import * as S from '@styles/tierlist/Tierlist.style'
import { RANKSTR, RankType } from 'types/tierlist/tierlist.type'
import { StringToRank } from '@utils/tierlist/tierlistUtil'
import Item from './Item'

type Props = {
  ranks: RankType
}

const TierlistView = ({ ranks }: Props) => {
  return (
    <S.Container>
      <S.Table>
        {Object.entries(ranks).map(([rank, list], index) => {
          if (index === 0) return null
          return (
            <S.Tr key={rank}>
              <S.Rank backgroundColor={rank as RANKSTR}>
                {StringToRank(rank)}
              </S.Rank>
              <S.RankCotent>
                {list.map((item) => (
                  <Item
                    itemRankImage={item.itemRankImage}
                    name={item.name}
                    key={item.id}
                  />
                ))}
              </S.RankCotent>
            </S.Tr>
          )
        })}
      </S.Table>
      <S.WaitingItemBlock>
        {ranks.noneRanks.map((item) => (
          <Item
            itemRankImage={item.itemRankImage}
            name={item.name}
            key={item.id}
          />
        ))}
      </S.WaitingItemBlock>
    </S.Container>
  )
}

export default TierlistView
