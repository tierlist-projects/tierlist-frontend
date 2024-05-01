import { useEffect } from 'react'
import * as S from '@styles/common/Header.style'
import { useNavigate } from 'react-router-dom'
import useModal from '@hooks/useModal'
import LoginModal from '@components/login/LoginModal'
import { useRecoilState } from 'recoil'
import { userState } from '@atom/userAtom'
import { authHttp } from '@utils/http'
import { UserInformationType } from 'types/user/user.type'
import { getCookie } from '@utils/cookie'
import SearchBar from './SearchBar'

const Header = () => {
  const navigate = useNavigate()

  const { Modal, isOpen, openModal, closeModal } = useModal()
  const [user, setUser] = useRecoilState(userState)
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
    <S.HeaderContainer>
      <S.ContentBlock>
        <S.Logo onClick={() => navigate('/')}>티어리스트</S.Logo>
        <S.RightArea>
          <SearchBar />
          {user === null ? (
            <S.LoginMyPageButton onClick={openModal}>
              로그인
            </S.LoginMyPageButton>
          ) : (
            <div>{user.nickname}</div>
          )}
        </S.RightArea>
      </S.ContentBlock>

      <Modal isOpen={isOpen}>
        <LoginModal closeModal={closeModal} />
      </Modal>
    </S.HeaderContainer>
  )
}

export default Header
