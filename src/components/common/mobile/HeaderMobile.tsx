import { images } from '@constants/images'
import useSidebar from '@hooks/useSidebar'
import * as S from '@styles/common/HeaderMobile.style'

const HeaderMobile = () => {
  const { Sidebar, isOpen, openSidebar, closeSidebar } = useSidebar()
  return (
    <S.Container>
      <S.Logo>티어리스트</S.Logo>
      <S.IconBlock>
        <button type="button">
          <img src={images.common.searchBar.searchBlack} alt="검색" />
        </button>
        <button type="button" onClick={openSidebar}>
          <img src={images.common.user} alt="유저" />
        </button>
      </S.IconBlock>
      <Sidebar isOpen={isOpen} closeSidebar={closeSidebar}>
        <S.SidebarContainer>하이</S.SidebarContainer>
      </Sidebar>
    </S.Container>
  )
}

export default HeaderMobile
