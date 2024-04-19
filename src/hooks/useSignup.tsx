/* eslint-disable no-else-return */
import { http } from '@utils/http'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ResponseErrorSignup } from 'types/signup/signup.type'

const useSignup = () => {
  const navigate = useNavigate()
  const emailRef = useRef<HTMLInputElement>(null)
  const certRef = useRef<HTMLInputElement>(null)
  const pwRef = useRef<HTMLInputElement>(null)
  const pwCheckRef = useRef<HTMLInputElement>(null)
  const nicknameRef = useRef<HTMLInputElement>(null)

  const [emailErrorText, setEmailErrorText] = useState('')
  const [certErrorText, setCertErrorText] = useState('')
  const [pwErrorText, setPwErrorText] = useState('')
  const [pwCheckErrorText, setPwCheckErrorText] = useState('')
  const [nicknameErrorText, setNicknameErrorText] = useState('')

  const [certEmail, setCertEmail] = useState('')
  const [certPw, setCertPw] = useState('')
  const [certNickname, setCertNickname] = useState('')
  const [certCode, setCertCode] = useState('')
  const [isCert, setIsCert] = useState(false)
  const [isPwCheck, setIsPwCheck] = useState(false)
  const [isNicknameCheck, setIsNicknameCheck] = useState(false)

  const onClickSignup = () => {
    if (
      emailRef.current &&
      certRef.current &&
      pwRef.current &&
      pwCheckRef.current &&
      nicknameRef.current
    ) {
      if (emailRef.current.value === '') {
        setEmailErrorText('* 이메일을 입력해주세요.')
        return
      } else {
        setEmailErrorText('')
      }
      if (certRef.current.value === '') {
        setCertErrorText('* 이메일 인증을 해주세요.')
        return
      } else {
        setCertErrorText('')
      }
      if (pwRef.current.value === '') {
        setPwErrorText('* 비밀번호를 입력해주세요.')
        return
      } else {
        setPwErrorText('')
      }
      if (pwCheckRef.current.value === '') {
        setPwCheckErrorText('* 비밀번호 확인을 해주세요')
        return
      } else {
        setPwCheckErrorText('')
      }
      if (nicknameRef.current.value === '') {
        setNicknameErrorText('* 닉네임을 입력해주세요.')
        return
      } else {
        setNicknameErrorText('')
      }
      if (certEmail !== emailRef.current.value) {
        setEmailErrorText('* 인증된 이메일이 아닙니다.')
        return
      } else {
        setEmailErrorText('')
      }
      if (!isCert) {
        setCertErrorText('* 이메일 인증을 해주세요.')
        return
      } else {
        setCertErrorText('')
      }
      if (
        emailRef.current!.value !== certEmail ||
        certRef.current!.value !== certCode
      ) {
        setCertErrorText('* 이메일 인증을 해주세요.')
        setIsCert(false)
        return
      } else {
        setCertErrorText('')
      }
      if (!isPwCheck) {
        setPwCheckErrorText('* 비밀번호 확인을 해주세요.')
        return
      } else {
        setPwCheckErrorText('')
      }
      if (pwRef.current!.value !== certPw) {
        setPwCheckErrorText('* 비밀번호 확인을 해주세요.')
        setIsPwCheck(false)
        return
      } else {
        setPwCheckErrorText('')
      }
      if (!isNicknameCheck) {
        setNicknameErrorText('* 닉네임 중복 확인을 해주세요.')
        return
      } else {
        setNicknameErrorText('')
      }
      if (nicknameRef.current!.value !== certNickname) {
        setNicknameErrorText('* 닉네임 중복 확인을 해주세요.')
        setIsNicknameCheck(false)
        return
      } else {
        setNicknameErrorText('')
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
            setCertErrorText('* 이메일 인증을 해주세요.')
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
          setCertErrorText('* 인증 번호가 전송되었습니다.')
        })
        .catch((err) => {
          const data = err.response.data as ResponseErrorSignup

          if (data.errorCode === 'IR-004') {
            setEmailErrorText('* 올바르지 않은 이메일 형식입니다.')
          }
        })
    }
  }

  const onClickSendCert = () => {
    if (emailRef.current) {
      if (emailRef.current.value === '') {
        setEmailErrorText('* 이메일을 입력해주세요.')
      } else {
        setEmailErrorText('')

        http
          .get(`member/email/unique?email=${emailRef.current.value}`)
          .then(() => {
            requestCert()
          })
          .catch((err) => {
            const data = err.response.data as ResponseErrorSignup

            if (data.errorCode === 'IR-004') {
              setEmailErrorText('* 올바르지 않은 이메일 형식입니다.')
            } else if (data.errorCode === 'D-004') {
              setEmailErrorText('* 중복된 이메일입니다.')
            }
          })
      }
    }
  }

  const onClickCertCheck = () => {
    if (certRef.current!.value === '') {
      setCertErrorText('* 인증번호를 입력해주세요.')
    } else if (emailRef.current!.value === '') {
      setEmailErrorText('* 이메일을 입력해주세요.')
    } else {
      setCertErrorText('')
      setEmailErrorText('')

      http
        .post(`member/email/verification/confirm`, {
          email: emailRef.current!.value,
          code: certRef.current!.value,
        })
        .then(() => {
          setCertErrorText('')
          setCertEmail(emailRef.current!.value)
          setCertCode(certRef.current!.value)
          setIsCert(true)
        })
        .catch((err) => {
          const data = err.response.data as ResponseErrorSignup
          if (err.response.status === 404) {
            setCertErrorText('* 인증 번호가 일치하지 않습니다.')
          } else if (data.errorCode === 'IR-004') {
            setCertErrorText('* 유효하지 않은 인증 번호입니다.')
          }
        })
    }
  }

  const onClickPwCheck = () => {
    const lenRegex = /^.{8,20}$/
    const pwRegex = /^[!_@$%^&+=A-Za-z0-9]{8,20}$/
    if (pwRef.current!.value === '') {
      setPwErrorText('* 비밀번호를 입력해주세요.')
    } else if (!lenRegex.test(pwRef.current!.value)) {
      setPwErrorText('* 비밀번호는 8 ~ 20자여야 합니다.')
    } else if (!pwRegex.test(pwRef.current!.value)) {
      setPwErrorText(
        '* 영문 대문자, 소문자, 숫자, 특수문자 ! _ @ $ % ^ & + = 만 허용합니다',
      )
    } else if (pwCheckRef.current!.value === '') {
      setPwErrorText('')
      setPwCheckErrorText('* 비밀번호를 재입력해주세요.')
    } else {
      setPwErrorText('')

      if (pwRef.current!.value !== pwCheckRef.current!.value) {
        setPwCheckErrorText('* 비밀번호가 일치하지 않습니다.')
      } else {
        setIsPwCheck(true)
        setCertPw(pwRef.current!.value)
        setPwCheckErrorText('')
      }
    }
  }

  const onClickNicknameDup = () => {
    const lenRegex = /^.{2,10}$/
    const nicknameRegex = /^[a-zA-Z0-9가-힣]{2,10}$/

    if (nicknameRef.current!.value === '') {
      setNicknameErrorText('* 닉네임을 입력해주세요.')
    } else if (!lenRegex.test(nicknameRef.current!.value)) {
      setNicknameErrorText('* 닉네임은 2 ~ 10자여야 합니다.')
    } else if (!nicknameRegex.test(nicknameRef.current!.value)) {
      setNicknameErrorText(
        '* 닉네임에 공백, 특수 문자, 자음, 모음을 포함할 수 없습니다.',
      )
    } else {
      setNicknameErrorText('')

      http
        .get(`member/nickname/unique?nickname=${nicknameRef.current!.value}`)
        .then(() => {
          setCertNickname(nicknameRef.current!.value)
          setIsNicknameCheck(true)
        })
        .catch((err) => {
          const data = err.response.data as ResponseErrorSignup

          if (data.errorCode === 'D-003') {
            setNicknameErrorText('* 중복된 닉네임입니다.')
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
  }
}

export default useSignup
