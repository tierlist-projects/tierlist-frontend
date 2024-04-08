import * as S from '@styles/main/favorites.style'
import { images } from '@constants/images'

const Favorites = () => {
  return (
    <S.FavoritesContainer>
      <S.Title>즐겨찾기</S.Title>
      <S.FavoritesList>
        <S.Favorite onClick={() => console.log('이동')}>
          <S.Star
            src={images.common.favorites.fullStar}
            alt="즐겨찾기"
            onClick={(event) => {
              event.stopPropagation()
              console.log('이벤트 전파 막고 즐겨찾기 해제')
            }}
          />
          <p>카테고리명</p>
        </S.Favorite>
      </S.FavoritesList>
    </S.FavoritesContainer>
  )
}

export default Favorites
