import * as S from '@styles/common/SearchBar.style'
import { images } from '@constants/images'
// import { changeNumberOfPost } from '@utils/common/searchBarUtil'
import useSearchBar from '@hooks/useSearchBar'
import { Pagination } from '@mui/material'

const SearchBar = () => {
  const {
    categoryList,
    totalPages,
    isDrop,
    dropRef,
    setIsDrop,
    onChangeKeyword,
    onClickCategoryPage,
    onClickCategory,
  } = useSearchBar()

  return (
    <S.SearchBarContainer ref={dropRef}>
      <img src={images.common.searchBar.search} alt="검색" />
      <S.Search onChange={onChangeKeyword} onFocus={() => setIsDrop(true)} />
      {isDrop && (
        <S.SearchResultContainer>
          {categoryList.length > 0 ? (
            <S.SearchResultWrap>
              {categoryList.map((category) => (
                <S.SearchResult
                  key={category.id}
                  onClick={() => onClickCategory(category.id)}
                >
                  {category.name}
                </S.SearchResult>
              ))}
            </S.SearchResultWrap>
          ) : (
            <S.EmptyResult>검색 결과가 없습니다.</S.EmptyResult>
          )}

          {categoryList.length > 0 && (
            <Pagination
              count={totalPages}
              size="small"
              onChange={onClickCategoryPage}
            />
          )}
        </S.SearchResultContainer>
      )}
    </S.SearchBarContainer>
  )
}

export default SearchBar
