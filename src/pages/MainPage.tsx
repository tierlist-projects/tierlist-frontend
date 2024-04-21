import React from 'react'
import * as S from '@styles/main/mainPage.style'
import Favorites from '@components/main/Favorites'
import NotableTierList from '@components/main/NotableTierList'
import PopularCategories from '@components/main/PopularCategories'

const MainPage = () => {
  return (
    <S.MainPageContainer>
      <Favorites />
      <S.MiddleContent>
        <NotableTierList />
        <PopularCategories />
      </S.MiddleContent>
    </S.MainPageContainer>
  )
}

export default MainPage
