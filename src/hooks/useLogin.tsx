import { loginApi } from '@apis/login/loginApi'
import { accessTokenState } from '@atom/userAtom'
import { setCookie } from '@utils/cookie'
import { useRef, useState } from 'react'
import { useSetRecoilState } from 'recoil'

const useLogin = () => {
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
        try {
          const data = await loginApi({
            email: emailRef.current.value,
            password: pwRef.current.value,
          })

          setAccessToken(data.accessToken)
          setCookie('refresh-token', `${data.tokenType} ${data.refreshToken}`, {
            path: '/',
            httpOnly: true,
          })

          // 성공하면 모달 클로즈하는거 해줘야함
        } catch (error) {
          setErrorMsg('* 이메일과 비밀번호를 다시 확인해주세요.')
        }
      }
    }
  }

  return { emailRef, pwRef, errorMsg, onClickLogin }
}

export default useLogin
