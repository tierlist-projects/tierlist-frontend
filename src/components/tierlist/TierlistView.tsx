import React from 'react'
import * as S from '@styles/tierlist/Tierlist.style'
import { colors } from '@constants/colors'
import { images } from '@constants/images'

const TierlistView = () => {
  const lankList = [
    {
      lank: 'S',
      color: colors.tierlist.lank.S,
      key: 'tierS',
      list: [],
    },
    {
      lank: 'A',
      color: colors.tierlist.lank.A,
      key: 'tierA',
      list: [
        {
          url: images.cat,
          key: 'cat',
        },
      ],
    },
    {
      lank: 'B',
      color: colors.tierlist.lank.B,
      key: 'tierB',
      list: [],
    },
    {
      lank: 'C',
      color: colors.tierlist.lank.C,
      key: 'tierC',
      list: [],
    },
    {
      lank: 'D',
      color: colors.tierlist.lank.D,
      key: 'tierD',
      list: [],
    },
    {
      lank: 'F',
      color: colors.tierlist.lank.F,
      key: 'tierF',
      list: [],
    },
  ]
  return (
    <S.Container>
      <S.Table>
        {lankList.map((lank) => (
          <S.Tr key={lank.key}>
            <S.Lank backgroundColor={lank.color}>{lank.lank}</S.Lank>
            <S.LankCotent>
              {lank.list.map((item) => (
                <S.Item
                  src={item.url}
                  alt={item.key}
                  key={item.key}
                  title={item.key}
                />
              ))}
            </S.LankCotent>
          </S.Tr>
        ))}
      </S.Table>
    </S.Container>
  )
}

export default TierlistView
