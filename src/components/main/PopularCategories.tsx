import React from 'react'
import * as S from '@styles/main/popularCategories.style'
import { ContentsContainer, ContentsTitle } from '@styles/main/mainPage.style'
import { abbreviateNumber } from '@utils/common/searchBarUtil'
import usePopularCategory from '@hooks/main/usePopularCategory'

const PopularCategories = () => {
  const { navigate, popularCategoryList: list } = usePopularCategory()
  return (
    <ContentsContainer>
      <ContentsTitle>인기 카테고리</ContentsTitle>
      <S.PopularList>
        {list.length > 0 ? (
          list.map((category, index) => (
            <S.PopularCategory
              key={category.name + category.id}
              onClick={() => navigate(`/tierlist/${category.id}`)}
            >
              <p className="rank">{index + 1}.</p>
              <p className="category">
                {category.name}({abbreviateNumber(category.favoriteCount)})
              </p>
            </S.PopularCategory>
          ))
        ) : (
          <div>없음</div>
        )}
      </S.PopularList>
    </ContentsContainer>
  )
}

export default PopularCategories
