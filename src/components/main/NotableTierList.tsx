import React from 'react'
import * as S from '@styles/main/notableTierList.style'
import { ContentsContainer, ContentsTitle } from '@styles/main/mainPage.style'
// import PostCard from '@components/common/PostCard'

const NotableTierList = () => {
  return (
    <ContentsContainer>
      <ContentsTitle>주목할만한 티어리스트</ContentsTitle>
      <S.TierList>
        {/* <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard /> */}
      </S.TierList>
    </ContentsContainer>
  )
}

export default NotableTierList
