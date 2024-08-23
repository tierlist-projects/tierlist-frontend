import { accessTokenState, userState } from '@atom/userAtom'
import { setCookie } from '@utils/cookie'
import { authHttp, http } from '@utils/http'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ResponseTokenType } from 'types/auth.type'
import { useSetRecoilState } from 'recoil'
import { UserInformationType } from 'types/user/user.type'

const useLogin = (closeModal: () => void) => {
  const emailRef = useRef<HTMLInputElement>(null)
  const pwRef = useRef<HTMLInputElement>(null)
  const [errorMsg, setErrorMsg] = useState('')
  const setAccessToken = useSetRecoilState(accessTokenState)
  const setUser = useSetRecoilState(userState)

  const onLogin = async () => {
    if (emailRef.current && pwRef.current) {
      if (emailRef.current.value === '') {
        setErrorMsg('* 아이디를 입력해주세요.')
      } else if (pwRef.current.value === '') {
        setErrorMsg('* 비밀번호를 입력해주세요.')
      } else {
        setErrorMsg('')

        if (!navigator.cookieEnabled) {
          alert('쿠키가 차단되어 있습니다. 설정을 통해 허용해주세요.')
          return
        }

        http
          .post(`login`, {
            email: emailRef.current.value,
            password: pwRef.current.value,
          })
          .then((res) => {
            const data = res as ResponseTokenType

            setAccessToken(data.accessToken)
            new Promise<void>((resolve) => {
              setCookie(
                'refresh-token',
                `${data.tokenType} ${data.refreshToken}`,
                {
                  path: '/',
                  maxAge: data.refreshTokenExpiresIn,
                },
              )
              resolve()
            }).then(() => {
              authHttp
                .get<UserInformationType>(`member/me`, {
                  Authorization: `Bearer ${data.accessToken}`,
                })
                .then((user) => {
                  setUser(user)
                  closeModal()
                })
            })
          })
          .catch(() => {
            setErrorMsg('* 이메일과 비밀번호를 다시 확인해주세요.')
          })
      }
    }
  }

  const onPressEnter = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Enter') onLogin()
    },
    [onLogin],
  )

  useEffect(() => {
    window.addEventListener('keydown', onPressEnter)
    return () => {
      window.removeEventListener('keydown', onPressEnter)
    }
  }, [])

  return { emailRef, pwRef, errorMsg, onLogin }
}

export default useLogin
