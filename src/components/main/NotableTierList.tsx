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
      <S.TierList>
        {notableList.length > 0 ? (
          notableList.map((post) => <PostCard post={post} key={post.id} />)
        ) : (
          <div>없음</div>
        )}
      </S.TierList>
      {notableList.length > 0 && (
        <Pagination
          count={totalPages}
          page={page}
          size="small"
          onChange={onChangePage}
        />
      )}
    </ContentsContainer>
  )
}

export default NotableTierList
