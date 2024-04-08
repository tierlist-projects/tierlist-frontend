import React from 'react'
import * as S from '@styles/main/popularCategories.style'
import { ContentsContainer, ContentsTitle } from '@styles/main/mainPage.style'

const PopularCategories = () => {
  return (
    <ContentsContainer>
      <ContentsTitle>인기 카테고리</ContentsTitle>
      <S.PopularList>
        <S.PopularCategory onClick={() => console.log('click')}>
          <p className="lank">1.</p>
          <p className="category">카테고리 이름</p>
        </S.PopularCategory>
        <S.PopularCategory onClick={() => console.log('click')}>
          <p className="lank">2.</p>
          <p className="category">카테고리 이름</p>
        </S.PopularCategory>
        <S.PopularCategory onClick={() => console.log('click')}>
          <p className="lank">3.</p>
          <p className="category">카테고리 이름</p>
        </S.PopularCategory>
        <S.PopularCategory onClick={() => console.log('click')}>
          <p className="lank">4.</p>
          <p className="category">카테고리 이름</p>
        </S.PopularCategory>
        <S.PopularCategory onClick={() => console.log('click')}>
          <p className="lank">5.</p>
          <p className="category">카테고리 이름</p>
        </S.PopularCategory>
        <S.PopularCategory onClick={() => console.log('click')}>
          <p className="lank">6.</p>
          <p className="category">카테고리 이름</p>
        </S.PopularCategory>
        <S.PopularCategory onClick={() => console.log('click')}>
          <p className="lank">7.</p>
          <p className="category">카테고리 이름</p>
        </S.PopularCategory>
        <S.PopularCategory onClick={() => console.log('click')}>
          <p className="lank">8.</p>
          <p className="category">카테고리 이름</p>
        </S.PopularCategory>
        <S.PopularCategory onClick={() => console.log('click')}>
          <p className="lank">9.</p>
          <p className="category">카테고리 이름</p>
        </S.PopularCategory>
        <S.PopularCategory onClick={() => console.log('click')}>
          <p className="lank">10.</p>
          <p className="category">카테고리 이름</p>
        </S.PopularCategory>
      </S.PopularList>
    </ContentsContainer>
  )
}

export default PopularCategories
