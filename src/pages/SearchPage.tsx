import { ReactComponent as Search } from '@assets/icon/search.svg'
import Loading from '@components/common/Loading'
import { colors } from '@constants/colors'
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
    categoryPages,
    isLoading,
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
          <Search width={24} height={24} fill={colors.grey.primary} />
          <input
            type="text"
            placeholder="검색어를 입력하세요."
            onChange={onChangeKeyword}
          />
        </S.SearchBar>
        {(() => {
          if (isLoading) return <Loading />

          if (categoryList.length > 0) {
            return (
              <>
                <S.CategoryUl>
                  {categoryList.map((category) => (
                    <S.CategoryLi key={category.id}>
                      <S.CategoryLink to={`/tierlist/${category.id}`}>
                        {category.name}(
                        {abbreviateNumber(category.favoriteCount)})
                      </S.CategoryLink>
                    </S.CategoryLi>
                  ))}
                </S.CategoryUl>
                <Pagination
                  page={categoryPages}
                  count={totalPages}
                  size="small"
                  onChange={onClickCategoryPage}
                />
              </>
            )

            return <div>검색 결과가 없습니다.</div>
          }
        })()}
      </S.Container>
    </S.Layout>
  )
}

export default SearchPage
