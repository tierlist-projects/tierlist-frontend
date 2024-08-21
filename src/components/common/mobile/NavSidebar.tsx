import * as S from '@styles/common/NavSidebar.style'
import { userState } from '@atom/userAtom'
import { removeCookie } from '@utils/cookie'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import { images } from '@constants/images'

type Props = {
  closeSidebar: () => void
}

const NavSidebar = ({ closeSidebar }: Props) => {
  const user = useRecoilValue(userState)
  const resetUser = useResetRecoilState(userState)

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
