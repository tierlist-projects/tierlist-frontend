import React from 'react'
import * as S from '@styles/common/Header.style'
import { useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar'

const Header = () => {
  const navigate = useNavigate()
  return (
    <S.HeaderContainer>
      <S.ContentBlock>
        <S.Logo onClick={() => navigate('/')}>티어리스트</S.Logo>
        <S.RightArea>
          <SearchBar />
          <S.LoginMyPageButton>로그인</S.LoginMyPageButton>
        </S.RightArea>
      </S.ContentBlock>
    </S.HeaderContainer>
  )
}

export default Header
