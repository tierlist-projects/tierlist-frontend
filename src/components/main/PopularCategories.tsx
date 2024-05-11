import React from 'react'
import * as S from '@styles/main/popularCategories.style'
import { ContentsContainer, ContentsTitle } from '@styles/main/mainPage.style'

const PopularCategories = () => {
  return (
    <ContentsContainer>
      <ContentsTitle>인기 카테고리</ContentsTitle>
      <S.PopularList>
        <S.PopularCategory onClick={() => console.log('click')}>
          <p className="rank">1.</p>
          <p className="category">카테고리 이름</p>
        </S.PopularCategory>
        <S.PopularCategory onClick={() => console.log('click')}>
          <p className="rank">2.</p>
          <p className="category">카테고리 이름</p>
        </S.PopularCategory>
        <S.PopularCategory onClick={() => console.log('click')}>
          <p className="rank">3.</p>
          <p className="category">카테고리 이름</p>
        </S.PopularCategory>
        <S.PopularCategory onClick={() => console.log('click')}>
          <p className="rank">4.</p>
          <p className="category">카테고리 이름</p>
        </S.PopularCategory>
        <S.PopularCategory onClick={() => console.log('click')}>
          <p className="rank">5.</p>
          <p className="category">카테고리 이름</p>
        </S.PopularCategory>
        <S.PopularCategory onClick={() => console.log('click')}>
          <p className="rank">6.</p>
          <p className="category">카테고리 이름</p>
        </S.PopularCategory>
        <S.PopularCategory onClick={() => console.log('click')}>
          <p className="rank">7.</p>
          <p className="category">카테고리 이름</p>
        </S.PopularCategory>
        <S.PopularCategory onClick={() => console.log('click')}>
          <p className="rank">8.</p>
          <p className="category">카테고리 이름</p>
        </S.PopularCategory>
        <S.PopularCategory onClick={() => console.log('click')}>
          <p className="rank">9.</p>
          <p className="category">카테고리 이름</p>
        </S.PopularCategory>
        <S.PopularCategory onClick={() => console.log('click')}>
          <p className="rank">10.</p>
          <p className="category">카테고리 이름</p>
        </S.PopularCategory>
      </S.PopularList>
    </ContentsContainer>
  )
}

export default PopularCategories
