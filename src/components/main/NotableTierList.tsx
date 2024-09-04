import React from 'react'
import * as S from '@styles/main/notableTierList.style'
import { ContentsTitle } from '@styles/main/mainPage.style'
import useNotableTierlist from '@hooks/main/useNotableTierlist'
import PostCard from '@components/common/PostCard'
import { Pagination } from '@mui/material'
import { Mobile, PC, Tablet } from '@components/common/MediaQuery'
import PostListItem from '@components/common/PostListItem'

const NotableTierList = () => {
  const { notableList, page, totalPages, onChangePage } = useNotableTierlist()
  return (
    <S.ContentsContainer>
      <ContentsTitle>주목할만한 티어리스트</ContentsTitle>

      {notableList.length > 0 ? (
        <>
          <PC>
            <S.TierList className="notable-top">
              {notableList.map((post) => (
                <PostCard post={post} key={post.id} />
              ))}
            </S.TierList>
          </PC>
          <Tablet>
            <S.TierList className="notable-top">
              {notableList.map((post) => (
                <PostCard post={post} key={post.id} />
              ))}
            </S.TierList>
          </Tablet>
          <Mobile>
            <S.TierListMobile className="notable-top">
              {notableList.map((post) => (
                <PostListItem post={post} key={post.id} />
              ))}
            </S.TierListMobile>
          </Mobile>
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
    </S.ContentsContainer>
  )
}

export default NotableTierList
