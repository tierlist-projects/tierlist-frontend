import useLogin from '@hooks/useLogin'
import * as S from '@styles/login/LoginPage.style'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()
  const { emailRef, pwRef, onLogin, errorMsg } = useLogin(() => navigate('/'))
  return (
    <S.Container>
      <S.Title>로그인</S.Title>
      <S.InputBlock>
        <S.Input type="email" placeholder="이메일" ref={emailRef} />
        <S.Input type="password" placeholder="비밀번호" ref={pwRef} />
        {errorMsg && <S.ErrorMsg>{errorMsg}</S.ErrorMsg>}
      </S.InputBlock>
      <S.LoginButton type="button" onClick={onLogin}>
        로그인
      </S.LoginButton>
      <S.SignupButton type="button" onClick={() => navigate(`/sign-up`)}>
        회원가입
      </S.SignupButton>
    </S.Container>
  )
}

export default LoginPage
