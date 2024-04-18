import React from 'react'
import * as S from '@styles/common/Header.style'
import { useNavigate } from 'react-router-dom'
import useModal from '@hooks/useModal'
import LoginModal from '@components/login/LoginModal'
import SearchBar from './SearchBar'

const Header = () => {
  const navigate = useNavigate()

  const { Modal, isOpen, openModal, closeModal } = useModal()

  return (
    <S.HeaderContainer>
      <S.ContentBlock>
        <S.Logo onClick={() => navigate('/')}>티어리스트</S.Logo>
        <S.RightArea>
          <SearchBar />
          <S.LoginMyPageButton onClick={openModal}>로그인</S.LoginMyPageButton>
        </S.RightArea>
      </S.ContentBlock>

      <Modal isOpen={isOpen}>
        <LoginModal closeModal={closeModal} />
      </Modal>
    </S.HeaderContainer>
  )
}

export default Header
