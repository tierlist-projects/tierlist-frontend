import React from 'react'
import * as S from '@styles/signup/signupPage.style'
import CButton from '@components/common/CButton'
import { colors } from '@constants/colors'
import useSignup from '@hooks/useSignup'

const SignUpPage = () => {
  const {
    emailRef,
    certRef,
    pwRef,
    pwCheckRef,
    nicknameRef,
    emailErrorText,
    pwErrorText,
    certErrorText,
    pwCheckErrorText,
    nicknameErrorText,
    onClickCancel,
    onClickSignup,
    onClickSendCert,
    onClickCertCheck,
    onClickNicknameDup,
    onClickPwCheck,
  } = useSignup()
  return (
    <S.Container>
      <S.Title>회원가입</S.Title>
      <S.InputBlock>
        <S.TextBlock>
          <p className="title">이메일</p>
          <p className="notice">{emailErrorText}</p>
        </S.TextBlock>
        <S.InputWithButton>
          <input type="email" placeholder="이메일 입력" ref={emailRef} />
          <button type="button" onClick={onClickSendCert}>
            인증번호 전송
          </button>
        </S.InputWithButton>
      </S.InputBlock>
      <S.InputBlock>
        <S.TextBlock>
          <p className="title">이메일 인증</p>
          <p className="notice">{certErrorText}</p>
        </S.TextBlock>
        <S.InputWithButton>
          <input type="text" placeholder="인증번호 입력" ref={certRef} />
          <button type="button" onClick={onClickCertCheck}>
            확인
          </button>
        </S.InputWithButton>
      </S.InputBlock>
      <S.InputBlock>
        <S.TextBlock>
          <p className="title">비밀번호</p>
          <p className="notice">{pwErrorText}</p>
        </S.TextBlock>
        <S.Input
          type="password"
          placeholder="비밀번호 입력(8 ~ 20자)"
          ref={pwRef}
        />
      </S.InputBlock>
      <S.InputBlock>
        <S.TextBlock>
          <p className="title">비밀번호 확인</p>
          <p className="notice">{pwCheckErrorText}</p>
        </S.TextBlock>
        <S.InputWithButton>
          <input
            type="password"
            placeholder="비밀번호 재입력"
            ref={pwCheckRef}
          />
          <button type="button" onClick={onClickPwCheck}>
            확인
          </button>
        </S.InputWithButton>
      </S.InputBlock>
      <S.InputBlock>
        <S.TextBlock>
          <p className="title">닉네임</p>
          <p className="notice">{nicknameErrorText}</p>
        </S.TextBlock>
        <S.InputWithButton>
          <input
            type="text"
            placeholder="닉네임 입력(2 ~ 10자)"
            ref={nicknameRef}
          />
          <button type="button" onClick={onClickNicknameDup}>
            중복 확인
          </button>
        </S.InputWithButton>
      </S.InputBlock>
      <S.ButtonBlock>
        <CButton
          text="가입"
          radius={10}
          hPadding={8}
          vPadding={32}
          onClick={onClickSignup}
        />
        <CButton
          text="취소"
          radius={10}
          hPadding={8}
          vPadding={32}
          backgroundColor={colors.grey.primary}
          onClick={onClickCancel}
        />
      </S.ButtonBlock>
    </S.Container>
  )
}

export default SignUpPage
