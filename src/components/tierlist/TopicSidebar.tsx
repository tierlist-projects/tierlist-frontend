import React from 'react'
import * as S from '@styles/tierlist/TopicSidebar.style'
import { images } from '@constants/images'

const TopicSidebar = () => {
  return (
    <S.Container>
      <S.Title>토픽</S.Title>
      <S.SearchBarContainer>
        <img src={images.common.searchBar.search} alt="토픽 검색" />
        <S.Search type="text" />
      </S.SearchBarContainer>
      <S.TopicList>
        <S.TopicItem onClick={() => console.log('클릭')}>하이하이</S.TopicItem>
        <S.TopicItem onClick={() => console.log('클릭')}>하이하이</S.TopicItem>
        <S.TopicItem onClick={() => console.log('클릭')}>하이하이</S.TopicItem>
        <S.TopicItem onClick={() => console.log('클릭')}>하이하이</S.TopicItem>
        <S.TopicItem onClick={() => console.log('클릭')}>하이하이</S.TopicItem>
      </S.TopicList>
    </S.Container>
  )
}

export default TopicSidebar
