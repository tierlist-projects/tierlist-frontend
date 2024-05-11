import React from 'react'
import * as S from '@styles/tierlist/Tierlist.style'
import { images } from '@constants/images'
import { RANKSTR } from 'types/tierlist/tierlist.type'
import Item from './Item'

const TierlistView = () => {
  const rankList = [
    {
      rank: 'S',
      color: 'sranks',
      key: 'tierS',
      list: [],
    },
    {
      rank: 'A',
      color: 'aranks',
      key: 'tierA',
      list: [
        {
          url: images.cat,
          key: 'cat',
        },
      ],
    },
    {
      rank: 'B',
      color: 'branks',
      key: 'tierB',
      list: [],
    },
    {
      rank: 'C',
      color: 'cranks',
      key: 'tierC',
      list: [],
    },
    {
      rank: 'D',
      color: 'dranks',
      key: 'tierD',
      list: [],
    },
    {
      rank: 'F',
      color: 'franks',
      key: 'tierF',
      list: [],
    },
  ]
  return (
    <S.Container>
      <S.Table>
        {rankList.map((rank) => (
          <S.Tr key={rank.key}>
            <S.Rank backgroundColor={rank.color as RANKSTR}>{rank.rank}</S.Rank>
            <S.RankCotent>
              {rank.list.map((item) => (
                <Item itemRankImage={item.url} name={item.key} key={item.key} />
              ))}
            </S.RankCotent>
          </S.Tr>
        ))}
      </S.Table>
    </S.Container>
  )
}

export default TierlistView
