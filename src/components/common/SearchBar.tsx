import React, { useState } from 'react'
import * as S from '@styles/common/SearchBar.style'
import { images } from '@constants/images'
import { changeNumberOfPost } from '@utils/common/searchBarUtil'

const SearchBar = () => {
  const [keyword, setKeyword] = useState('')
  const [items] = useState([
    { key: 1, name: '카페', posts: 1000 },
    { key: 2, name: '카페', posts: 1000 },
    { key: 3, name: '카페', posts: 1000 },
  ])
  const onChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value)
  }

  return (
    <S.SearchBarContainer>
      <img src={images.common.searchBar.search} alt="검색" />
      <S.Search value={keyword} onChange={onChangeKeyword} />
      {items.length > 0 && keyword && (
        <S.SearchResultContainer>
          <S.SearchResultWrap>
            {items.map((item) => (
              <S.SearchResult key={item.key}>
                {item.name}({changeNumberOfPost(item.posts)})
              </S.SearchResult>
            ))}
          </S.SearchResultWrap>
        </S.SearchResultContainer>
      )}
    </S.SearchBarContainer>
  )
}

export default SearchBar
