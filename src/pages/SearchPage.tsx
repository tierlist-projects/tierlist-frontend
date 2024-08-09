import { images } from '@constants/images'
import useSearchBar from '@hooks/useSearchBar'
import { Pagination } from '@mui/material'
import * as S from '@styles/common/SearchPage.style'
import { abbreviateNumber } from '@utils/common/searchBarUtil'
import { useEffect } from 'react'

const SearchPage = () => {
  const {
    onChangeKeyword,
    totalPages,
    categoryList,
    setIsDrop,
    onClickCategoryPage,
  } = useSearchBar(20)
  useEffect(() => {
    setIsDrop(true)

    return () => {
      setIsDrop(false)
    }
  }, [])

  return (
    <S.Layout>
      <S.Container>
        <S.SearchBar>
          <img src={images.common.searchBar.searchBlack} alt="검색" />
          <input
            type="text"
            placeholder="검색어를 입력하세요."
            onChange={onChangeKeyword}
          />
        </S.SearchBar>
        {categoryList.length > 0 ? (
          <>
            <S.CategoryUl>
              {categoryList.map((category) => (
                <S.CategoryLi key={category.id}>
                  <S.CategoryLink to={`/tierlist/${category.id}`}>
                    {category.name}({abbreviateNumber(category.favoriteCount)})
                  </S.CategoryLink>
                </S.CategoryLi>
              ))}
            </S.CategoryUl>
            <Pagination
              count={totalPages}
              size="small"
              onChange={onClickCategoryPage}
            />
          </>
        ) : (
          <div>검색 결과가 없습니다.</div>
        )}
      </S.Container>
    </S.Layout>
  )
}

export default SearchPage
