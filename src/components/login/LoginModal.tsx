import React from 'react'
import * as S from '@styles/login/LoginModal.style'
import { images } from '@constants/images'
import useLogin from '@hooks/useLogin'

type Props = {
  closeModal: () => void
}

const LoginModal = ({ closeModal }: Props) => {
  const { emailRef, pwRef, errorMsg, onClickLogin } = useLogin()
  return (
    <S.Container>
      <S.CloseButton onClick={closeModal}>
        <img src={images.common.close} alt="모달 닫기" />
      </S.CloseButton>
      <S.Title>로그인</S.Title>
      <S.InputBlock>
        <S.Input type="email" placeholder="이메일" ref={emailRef} />
        <S.Input type="password" placeholder="비밀번호" ref={pwRef} />
        <S.errorText>{errorMsg}</S.errorText>
      </S.InputBlock>
      <S.LoginButton onClick={onClickLogin}>로그인</S.LoginButton>
      <S.SignUpButton>회원가입</S.SignUpButton>
    </S.Container>
  )
}

export default LoginModal
