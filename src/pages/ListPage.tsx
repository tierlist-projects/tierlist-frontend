import React, { useCallback, useState } from 'react'
import * as S from '@styles/tierlist/ListPage'
import { images } from '@constants/images'
import PostCard from '@components/common/PostCard'
import Pagination from '@mui/material/Pagination'

const ListPage = () => {
  const [page, setPage] = useState(1)
  const onChangePage = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      if (value === undefined) return
      console.log(value)

      setPage(value)
    },
    [],
  )

  return (
    <S.Container>
      <S.TitleBlock>
        <button type="button">
          <img
            src={images.common.favorites.emptyStar}
            alt="즐겨찾기"
            className="favorite"
          />
        </button>
        <S.Title>카테고리 이름</S.Title>
      </S.TitleBlock>
      <S.TierlistBlock>
        <S.Title>인기 티어리스트</S.Title>
        <S.List>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </S.List>
      </S.TierlistBlock>
      <S.TierlistBlock>
        <S.Title>티어리스트</S.Title>
        <S.List>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </S.List>
        <S.BottomBlock>
          <Pagination count={5} page={page} onChange={onChangePage} />
          <S.TierlistSearch>
            <select>
              <option>제목</option>
              <option>내용</option>
              <option>내용+제목</option>
            </select>
            <S.SearchBarContainer>
              <S.Search type="text" placeholder="검색어를 입력하세요." />
              <button type="button">
                <img
                  src={images.common.searchBar.search}
                  alt="티어리스트 검색"
                />
              </button>
            </S.SearchBarContainer>
          </S.TierlistSearch>
        </S.BottomBlock>
      </S.TierlistBlock>
    </S.Container>
  )
}

export default ListPage
