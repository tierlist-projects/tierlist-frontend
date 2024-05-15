import * as S from '@styles/main/favorites.style'
import { images } from '@constants/images'
import useFavorites from '@hooks/main/useFavorites'
import React from 'react'

const Favorites = () => {
  const { navigate, favoriteCategories, favoriteTopics, onClick } =
    useFavorites()
  return (
    <S.FavoritesContainer>
      <S.Title>즐겨찾기</S.Title>
      <S.FavoritesList>
        {favoriteCategories.length > 0 || favoriteTopics.length > 0 ? (
          <>
            {favoriteCategories.map((category) => (
              <S.Favorite
                key={`favoriteCategory${category.id}`}
                onClick={() => navigate(`/tierlist/${category.id}`)}
              >
                <S.Star
                  src={images.common.favorites.fullStar}
                  alt="즐겨찾기"
                  onClick={(e: React.MouseEvent) => {
                    onClick(e, 'category', category.id)
                  }}
                />
                <p>{category.name}</p>
              </S.Favorite>
            ))}
            {favoriteTopics.map((topic) => (
              <S.Favorite
                key={`favoriteTopic${topic.id}`}
                onClick={() => navigate(`/tierlist/${topic.id}`)}
              >
                <S.Star
                  src={images.common.favorites.fullStar}
                  alt="즐겨찾기"
                  onClick={(e: React.MouseEvent) => {
                    onClick(e, 'topic', topic.id)
                  }}
                />
                <p>
                  {topic.category.name}/{topic.name}
                </p>
              </S.Favorite>
            ))}
          </>
        ) : (
          <S.EmptyText>즐겨찾기한 카테고리/토픽이 없습니다.</S.EmptyText>
        )}
      </S.FavoritesList>
    </S.FavoritesContainer>
  )
}

export default Favorites
