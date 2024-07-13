/* eslint-disable no-else-return */
import { http } from '@utils/http'
import { useCallback, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ResponseErrorSignup } from 'types/signup/signup.type'

const useSignup = () => {
  const navigate = useNavigate()
  const emailRef = useRef<HTMLInputElement>(null)
  const certRef = useRef<HTMLInputElement>(null)
  const pwRef = useRef<HTMLInputElement>(null)
  const pwCheckRef = useRef<HTMLInputElement>(null)
  const nicknameRef = useRef<HTMLInputElement>(null)

  const [emailNoticeText, setEmailNoticeText] = useState('')
  const [certNoticeText, setCertNoticeText] = useState('')
  const [pwNoticeText, setPwNoticeText] = useState('')
  const [pwCheckNoticeText, setPwCheckNoticeText] = useState('')
  const [nicknameNoticeText, setNicknameNoticeText] = useState('')

  const [certEmail, setCertEmail] = useState('')
  const [certPw, setCertPw] = useState('')
  const [certNickname, setCertNickname] = useState('')
  const [certCode, setCertCode] = useState('')
  const [isCert, setIsCert] = useState(false)
  const [isPwCheck, setIsPwCheck] = useState(false)
  const [isNicknameCheck, setIsNicknameCheck] = useState(false)

  const EMAIL_NOTICE_TEXT = 'email-notice-text'
  const EMAIL_CERT_NOTICE_TEXT = 'email-cert-notice-text'
  const PASSWOAD_NOTICE_TEXT = 'password-notice-text'
  const PASSWOAD_CHECK_NOTICE_TEXT = 'password-check-notice-text'
  const NICKNAME_NOTICE_TEXT = 'nickname-notice-text'

  const setCorrectColor = useCallback((text: string) => {
    const element = document.querySelector(`.${text}`)
    if (!element) return
    element.classList.remove('error')
    element.classList.add('correct')
  }, [])

  const setErrorColor = useCallback((text: string) => {
    const element = document.querySelector(`.${text}`)
    if (!element) return
    element.classList.remove('correct')
    element.classList.add('error')
  }, [])

  const onClickSignup = () => {
    if (
      emailRef.current &&
      certRef.current &&
      pwRef.current &&
      pwCheckRef.current &&
      nicknameRef.current
    ) {
      if (emailRef.current.value === '') {
        setErrorColor(EMAIL_NOTICE_TEXT)
        setEmailNoticeText('* 이메일을 입력해주세요.')
        return
      } else {
        setEmailNoticeText('')
      }
      if (certRef.current.value === '') {
        setErrorColor(EMAIL_CERT_NOTICE_TEXT)
        setCertNoticeText('* 이메일 인증을 해주세요.')
        return
      } else {
        setCertNoticeText('')
      }
      if (pwRef.current.value === '') {
        setErrorColor(PASSWOAD_NOTICE_TEXT)
        setPwNoticeText('* 비밀번호를 입력해주세요.')
        return
      } else {
        setPwNoticeText('')
      }
      if (pwCheckRef.current.value === '') {
        setErrorColor(PASSWOAD_CHECK_NOTICE_TEXT)
        setPwCheckNoticeText('* 비밀번호 확인을 해주세요')
        return
      } else {
        setPwCheckNoticeText('')
      }
      if (nicknameRef.current.value === '') {
        setErrorColor(NICKNAME_NOTICE_TEXT)
        setNicknameNoticeText('* 닉네임을 입력해주세요.')
        return
      } else {
        setNicknameNoticeText('')
      }
      if (certEmail !== emailRef.current.value) {
        setErrorColor(EMAIL_NOTICE_TEXT)
        setEmailNoticeText('* 인증된 이메일이 아닙니다.')
        return
      } else {
        setEmailNoticeText('')
      }
      if (!isCert) {
        setErrorColor(EMAIL_CERT_NOTICE_TEXT)
        setCertNoticeText('* 이메일 인증을 해주세요.')
        return
      } else {
        setCertNoticeText('')
      }
      if (
        emailRef.current!.value !== certEmail ||
        certRef.current!.value !== certCode
      ) {
        setErrorColor(EMAIL_CERT_NOTICE_TEXT)
        setCertNoticeText('* 이메일 인증을 해주세요.')
        setIsCert(false)
        return
      } else {
        setCertNoticeText('')
      }
      if (!isPwCheck) {
        setErrorColor(PASSWOAD_CHECK_NOTICE_TEXT)
        setPwCheckNoticeText('* 비밀번호 확인을 해주세요.')
        return
      } else {
        setPwCheckNoticeText('')
      }
      if (pwRef.current!.value !== certPw) {
        setErrorColor(PASSWOAD_CHECK_NOTICE_TEXT)
        setPwCheckNoticeText('* 비밀번호 확인을 해주세요.')
        setIsPwCheck(false)
        return
      } else {
        setPwCheckNoticeText('')
      }
      if (!isNicknameCheck) {
        setErrorColor(NICKNAME_NOTICE_TEXT)
        setNicknameNoticeText('* 닉네임 중복 확인을 해주세요.')
        return
      } else {
        setNicknameNoticeText('')
      }
      if (nicknameRef.current!.value !== certNickname) {
        setErrorColor(NICKNAME_NOTICE_TEXT)
        setNicknameNoticeText('* 닉네임 중복 확인을 해주세요.')
        setIsNicknameCheck(false)
        return
      } else {
        setNicknameNoticeText('')
      }

      http
        .post(`member`, {
          email: certEmail,
          nickname: certNickname,
          password: certPw,
          code: certCode,
        })
        .then(() => {
          alert('회원가입이 완료되었습니다.')
          navigate('/')
        })
        .catch((err) => {
          const data = err.response.data as ResponseErrorSignup

          if (data.errorCode === 'IR-002') {
            setErrorColor(EMAIL_CERT_NOTICE_TEXT)
            setCertNoticeText('* 이메일 인증을 해주세요.')
            setIsCert(false)
            setCertEmail('')
            setCertCode('')
          } else {
            alert('회원 가입에 실패하였습니다.')
          }
        })
    }
  }

  const onClickCancel = () => {
    navigate('/')
  }

  const requestCert = () => {
    if (emailRef.current) {
      http
        .post(`member/email/verification/request`, {
          email: emailRef.current.value,
        })
        .then(() => {
          setErrorColor(EMAIL_CERT_NOTICE_TEXT)
          setCertNoticeText('* 인증 번호가 전송되었습니다.')
        })
        .catch((err) => {
          const data = err.response.data as ResponseErrorSignup

          if (data.errorCode === 'IR-004') {
            setErrorColor(EMAIL_NOTICE_TEXT)
            setEmailNoticeText('* 올바르지 않은 이메일 형식입니다.')
          }
        })
    }
  }

  const onClickSendCert = () => {
    if (emailRef.current) {
      if (emailRef.current.value === '') {
        setErrorColor(EMAIL_NOTICE_TEXT)
        setEmailNoticeText('* 이메일을 입력해주세요.')
      } else {
        setEmailNoticeText('')

        http
          .get(`member/email/unique?email=${emailRef.current.value}`)
          .then(() => {
            requestCert()
          })
          .catch((err) => {
            const data = err.response.data as ResponseErrorSignup

            if (data.errorCode === 'IR-004') {
              setErrorColor(EMAIL_NOTICE_TEXT)
              setEmailNoticeText('* 올바르지 않은 이메일 형식입니다.')
            } else if (data.errorCode === 'D-004') {
              setErrorColor(EMAIL_NOTICE_TEXT)
              setEmailNoticeText('* 중복된 이메일입니다.')
            }
          })
      }
    }
  }

  const onClickCertCheck = () => {
    if (certRef.current!.value === '') {
      setErrorColor(EMAIL_CERT_NOTICE_TEXT)
      setCertNoticeText('* 인증번호를 입력해주세요.')
    } else if (emailRef.current!.value === '') {
      setErrorColor(EMAIL_NOTICE_TEXT)
      setEmailNoticeText('* 이메일을 입력해주세요.')
    } else {
      setCertNoticeText('')
      setEmailNoticeText('')

      http
        .post(`member/email/verification/confirm`, {
          email: emailRef.current!.value,
          code: certRef.current!.value,
        })
        .then(() => {
          setCorrectColor(EMAIL_CERT_NOTICE_TEXT)
          setCertNoticeText('* 인증되었습니다.')
          setCertEmail(emailRef.current!.value)
          setCertCode(certRef.current!.value)
          setIsCert(true)
        })
        .catch((err) => {
          const data = err.response.data as ResponseErrorSignup
          if (err.response.status === 404) {
            setErrorColor(EMAIL_CERT_NOTICE_TEXT)
            setCertNoticeText('* 인증 번호가 일치하지 않습니다.')
          } else if (data.errorCode === 'IR-004') {
            setErrorColor(EMAIL_CERT_NOTICE_TEXT)
            setCertNoticeText('* 유효하지 않은 인증 번호입니다.')
          }
        })
    }
  }

  const onClickPwCheck = () => {
    const lenRegex = /^.{8,20}$/
    const pwRegex = /^[!_@$%^&+=A-Za-z0-9]{8,20}$/
    if (pwRef.current!.value === '') {
      setErrorColor(PASSWOAD_NOTICE_TEXT)
      setPwNoticeText('* 비밀번호를 입력해주세요.')
    } else if (!lenRegex.test(pwRef.current!.value)) {
      setErrorColor(PASSWOAD_NOTICE_TEXT)
      setPwNoticeText('* 비밀번호는 8 ~ 20자여야 합니다.')
    } else if (!pwRegex.test(pwRef.current!.value)) {
      setErrorColor(PASSWOAD_NOTICE_TEXT)
      setPwNoticeText(
        '* 영문 대문자, 소문자, 숫자, 특수문자 ! _ @ $ % ^ & + = 만 허용합니다',
      )
    } else if (pwCheckRef.current!.value === '') {
      setPwNoticeText('')
      setErrorColor(PASSWOAD_CHECK_NOTICE_TEXT)
      setPwCheckNoticeText('* 비밀번호를 재입력해주세요.')
    } else {
      setPwNoticeText('')

      if (pwRef.current!.value !== pwCheckRef.current!.value) {
        setErrorColor(PASSWOAD_CHECK_NOTICE_TEXT)
        setPwCheckNoticeText('* 비밀번호가 일치하지 않습니다.')
      } else {
        setIsPwCheck(true)
        setCertPw(pwRef.current!.value)
        setCorrectColor(PASSWOAD_CHECK_NOTICE_TEXT)
        setPwCheckNoticeText('* 비밀번호가 일치합니다.')
      }
    }
  }

  const onClickNicknameDup = () => {
    const lenRegex = /^.{2,10}$/
    const nicknameRegex = /^[a-zA-Z0-9가-힣]{2,10}$/

    if (nicknameRef.current!.value === '') {
      setErrorColor(NICKNAME_NOTICE_TEXT)
      setNicknameNoticeText('* 닉네임을 입력해주세요.')
    } else if (!lenRegex.test(nicknameRef.current!.value)) {
      setErrorColor(NICKNAME_NOTICE_TEXT)
      setNicknameNoticeText('* 닉네임은 2 ~ 10자여야 합니다.')
    } else if (!nicknameRegex.test(nicknameRef.current!.value)) {
      setErrorColor(NICKNAME_NOTICE_TEXT)
      setNicknameNoticeText(
        '* 닉네임에 공백, 특수 문자, 자음, 모음을 포함할 수 없습니다.',
      )
    } else {
      setNicknameNoticeText('')

      http
        .get(`member/nickname/unique?nickname=${nicknameRef.current!.value}`)
        .then(() => {
          setCorrectColor(NICKNAME_NOTICE_TEXT)
          setNicknameNoticeText('* 사용할 수 있는 닉네임입니다.')
          setCertNickname(nicknameRef.current!.value)
          setIsNicknameCheck(true)
        })
        .catch((err) => {
          const data = err.response.data as ResponseErrorSignup

          if (data.errorCode === 'D-003') {
            setErrorColor(NICKNAME_NOTICE_TEXT)
            setNicknameNoticeText('* 중복된 닉네임입니다.')
          }
        })
    }
  }

  return {
    emailRef,
    certRef,
    pwRef,
    pwCheckRef,
    nicknameRef,
    emailNoticeText,
    pwNoticeText,
    certNoticeText,
    pwCheckNoticeText,
    nicknameNoticeText,
    onClickCancel,
    onClickSignup,
    onClickSendCert,
    onClickCertCheck,
    onClickNicknameDup,
    onClickPwCheck,
  }
}

export default useSignup
