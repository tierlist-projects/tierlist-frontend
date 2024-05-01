import { accessTokenState, userState } from '@atom/userAtom'
import { authHttp } from '@utils/http'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { UserInformationType } from 'types/user/user.type'

const useInitUser = () => {
  const setUser = useSetRecoilState(userState)
  const accessToken = useRecoilValue(accessTokenState)
  const initUser = () => {
    authHttp
      .get<UserInformationType>(`member/me`, {
        Authorization: `Bearer ${accessToken}`,
      })
      .then((res) => {
        setUser(res)
        console.log(res)
      })
  }

  return initUser
}

export default useInitUser
