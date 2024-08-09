import * as S from '@styles/common/NavSidebar.style'
import { userState } from '@atom/userAtom'
import { getCookie, removeCookie } from '@utils/cookie'
import { authHttp } from '@utils/http'
import { useEffect } from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'
import { UserInformationType } from 'types/user/user.type'
import { images } from '@constants/images'

type Props = {
  closeSidebar: () => void
}

const NavSidebar = ({ closeSidebar }: Props) => {
  const [user, setUser] = useRecoilState(userState)
  const resetUser = useResetRecoilState(userState)
  const refresh = getCookie('refresh-token')

  useEffect(() => {
    if (refresh) {
      authHttp
        .get<UserInformationType>(`member/me`)
        .then((res) => {
          setUser(res)
        })
        .catch((err) => console.error(err))
    }
  }, [setUser, refresh])
  return (
    <S.Container>
      {!user ? (
        <S.StyledLink to="/login" onClick={closeSidebar}>
          로그인
        </S.StyledLink>
      ) : (
        <>
          <S.Profile>
            <img
              src={
                user.profilImage
                  ? `https://image.tierlist.site/tierlist/${user.profilImage}`
                  : images.common.defaultProfile
              }
              alt="내 프로필"
            />
            <p>{user.nickname}</p>
          </S.Profile>
          <S.NavUl>
            <S.NavLi>
              <S.StyledLink to="/my-tierlist" onClick={closeSidebar}>
                내 티어리스트
              </S.StyledLink>
            </S.NavLi>
            <S.NavLi>
              <S.StyledLink to="/mypage" onClick={closeSidebar}>
                마이페이지
              </S.StyledLink>
            </S.NavLi>
            <S.NavLi>
              <S.StyledLink
                to="/"
                onClick={() => {
                  removeCookie('refresh-token')
                  resetUser()
                  window.location.replace('/')
                  closeSidebar()
                }}
              >
                로그아웃
              </S.StyledLink>
            </S.NavLi>
          </S.NavUl>
        </>
      )}
    </S.Container>
  )
}

export default NavSidebar
