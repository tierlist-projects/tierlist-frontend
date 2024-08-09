import { images } from '@constants/images'
import { useNavigate } from 'react-router-dom'
import useSidebar from '@hooks/useSidebar'
import * as S from '@styles/common/HeaderMobile.style'
import NavSidebar from './NavSidebar'

const HeaderMobile = () => {
  const navigate = useNavigate()
  const { Sidebar, isOpen, openSidebar, closeSidebar } = useSidebar()
  return (
    <S.Container>
      <S.Logo to="/">티어리스트</S.Logo>
      <S.IconBlock>
        <button type="button" onClick={() => navigate(`/search-category`)}>
          <img src={images.common.searchBar.searchBlack} alt="검색" />
        </button>
        <button type="button" onClick={openSidebar}>
          <img src={images.common.user} alt="유저" />
        </button>
      </S.IconBlock>
      <Sidebar isOpen={isOpen} closeSidebar={closeSidebar}>
        <NavSidebar closeSidebar={closeSidebar} />
      </Sidebar>
    </S.Container>
  )
}

export default HeaderMobile
