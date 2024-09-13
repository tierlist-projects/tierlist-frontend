import * as S from '@styles/common/SearchBar.style'
import { ReactComponent as Search } from '@assets/icon/search.svg'
import useSearchBar from '@hooks/useSearchBar'
import { Pagination } from '@mui/material'
import Loading from './Loading'

const SearchBar = () => {
  const {
    categoryList,
    totalPages,
    isDrop,
    dropRef,
    isLoading,
    categoryPages,
    setIsDrop,
    onChangeKeyword,
    onClickCategoryPage,
    onClickCategory,
  } = useSearchBar()

  return (
    <S.SearchBarContainer ref={dropRef}>
      <Search width={28} height={28} fill="#999999" />
      <S.Search onChange={onChangeKeyword} onFocus={() => setIsDrop(true)} />
      {isDrop && (
        <S.SearchResultContainer>
          {(() => {
            if (isLoading)
              return (
                <S.LoadingContainer>
                  <Loading />
                </S.LoadingContainer>
              )

            if (categoryList.length > 0) {
              return (
                <>
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
                  <Pagination
                    page={categoryPages}
                    count={totalPages}
                    size="small"
                    onChange={onClickCategoryPage}
                  />
                </>
              )
            }
            return <S.EmptyResult>검색 결과가 없습니다.</S.EmptyResult>
          })()}
        </S.SearchResultContainer>
      )}
    </S.SearchBarContainer>
  )
}

export default SearchBar
