import React from 'react'
import * as S from '@styles/login/LoginModal.style'
import { ReactComponent as Close } from '@assets/icon/x.svg'
import useLogin from '@hooks/useLogin'
import { useNavigate } from 'react-router-dom'

type Props = {
  closeModal: () => void
}

const LoginModal = ({ closeModal }: Props) => {
  const navigate = useNavigate()
  const { emailRef, pwRef, errorMsg, onLogin } = useLogin(closeModal)
  return (
    <S.Container>
      <S.CloseButton onClick={closeModal} aria-label="모달 닫기">
        <Close width={28} height={28} fill="black" />
      </S.CloseButton>
      <S.Title>로그인</S.Title>
      <S.InputBlock>
        <S.Input type="email" placeholder="이메일" ref={emailRef} />
        <S.Input type="password" placeholder="비밀번호" ref={pwRef} />
        <S.errorText>{errorMsg}</S.errorText>
      </S.InputBlock>
      <S.LoginButton onClick={onLogin}>로그인</S.LoginButton>
      <S.SignUpButton
        onClick={() => {
          navigate('/sign-up')
          closeModal()
        }}
      >
        회원가입
      </S.SignUpButton>
    </S.Container>
  )
}

export default LoginModal
