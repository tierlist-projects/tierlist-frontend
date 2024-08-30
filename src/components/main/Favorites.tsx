import * as S from '@styles/main/favorites.style'
import useFavorites from '@hooks/main/useFavorites'
import React from 'react'
import { ContentsTitle } from '@styles/main/mainPage.style'
import { ReactComponent as FullStar } from '@assets/icon/full-star.svg'

const Favorites = () => {
  const { navigate, favoriteCategories, favoriteTopics, onClick } =
    useFavorites()
  return (
    <S.FavoritesContainer>
      <ContentsTitle>즐겨찾기</ContentsTitle>
      <S.FavoritesList>
        {favoriteCategories.length > 0 || favoriteTopics.length > 0 ? (
          <>
            {favoriteCategories.map((category) => (
              <S.Favorite
                key={`favoriteCategory${category.id}`}
                onClick={() => navigate(`/tierlist/${category.id}`)}
              >
                <FullStar
                  width={20}
                  height={20}
                  fill="black"
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
                onClick={() =>
                  navigate(`/tierlist/${topic.category.id}/${topic.id}`)
                }
              >
                <FullStar
                  width={20}
                  height={20}
                  fill="black"
                  onClick={(e: React.MouseEvent) => {
                    onClick(e, 'category', topic.id)
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
