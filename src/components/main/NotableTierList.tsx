import React from 'react'
import * as S from '@styles/main/notableTierList.style'
import { ContentsContainer, ContentsTitle } from '@styles/main/mainPage.style'
import useNotableTierlist from '@hooks/main/useNotableTierlist'
import PostCard from '@components/common/PostCard'
import { Pagination } from '@mui/material'

const NotableTierList = () => {
  const { notableList, page, totalPages, onChangePage } = useNotableTierlist()
  return (
    <ContentsContainer>
      <ContentsTitle>주목할만한 티어리스트</ContentsTitle>

      {notableList.length > 0 ? (
        <>
          <S.TierList>
            {notableList.map((post) => (
              <PostCard post={post} key={post.id} />
            ))}
          </S.TierList>
          <Pagination
            count={totalPages}
            page={page}
            size="small"
            onChange={onChangePage}
          />
        </>
      ) : (
        <S.EmptyText>주목할만한 티어리스트가 없습니다.</S.EmptyText>
      )}
    </ContentsContainer>
  )
}

export default NotableTierList
