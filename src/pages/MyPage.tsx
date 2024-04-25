import React from 'react'
import * as S from '@styles/mypage/MyPage.style'
import MyTierlistCard from '@components/mypage/MyTierlistCard'

const MyPage = () => {
  return (
    <S.Container>
      <S.Title>내 티어리스트</S.Title>
      <S.Content>
        <MyTierlistCard />
      </S.Content>
    </S.Container>
  )
}

export default MyPage
