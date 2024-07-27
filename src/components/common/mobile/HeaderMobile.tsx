import { images } from '@constants/images'
import * as S from '@styles/common/HeaderMobile.style'

const HeaderMobile = () => {
  return (
    <S.Container>
      <S.Logo>티어리스트</S.Logo>
      <S.IconBlock>
        <button type="button">
          <img src={images.common.searchBar.searchBlack} alt="검색" />
        </button>
        <button type="button">
          <img src={images.common.user} alt="유저" />
        </button>
      </S.IconBlock>
    </S.Container>
  )
}

export default HeaderMobile
