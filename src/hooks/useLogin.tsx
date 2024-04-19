import { accessTokenState } from '@atom/userAtom'
import { setCookie } from '@utils/cookie'
import { http } from '@utils/http'
import { useRef, useState } from 'react'
import { ResponseTokenType } from 'types/auth.type'
import { useSetRecoilState } from 'recoil'

const useLogin = (closeModal: () => void) => {
  const emailRef = useRef<HTMLInputElement>(null)
  const pwRef = useRef<HTMLInputElement>(null)
  const [errorMsg, setErrorMsg] = useState('')
  const setAccessToken = useSetRecoilState(accessTokenState)

  const onClickLogin = async () => {
    if (emailRef.current && pwRef.current) {
      if (emailRef.current.value === '') {
        setErrorMsg('* 아이디를 입력해주세요.')
      } else if (pwRef.current.value === '') {
        setErrorMsg('* 비밀번호를 입력해주세요.')
      } else {
        setErrorMsg('')

        http
          .post(`login`, {
            email: emailRef.current.value,
            password: pwRef.current.value,
          })
          .then((res) => {
            const data = res as ResponseTokenType

            setAccessToken(data.accessToken)
            setCookie(
              'refresh-token',
              `${data.tokenType} ${data.refreshToken}`,
              {
                path: '/',
                httpOnly: true,
              },
            )
            closeModal()
          })
          .catch(() => {
            setErrorMsg('* 이메일과 비밀번호를 다시 확인해주세요.')
          })
      }
    }
  }

  return { emailRef, pwRef, errorMsg, onClickLogin }
}

export default useLogin
