import React from 'react'
import * as S from '@styles/mypage/MyTierlistPage.style'
import MyTierlistCard from '@components/mypage/MyTierlistCard'
import useMyTierlist from '@hooks/mypage/useMyTierlist'
import { Pagination } from '@mui/material'

const MyTierlistPage = () => {
  const { myList, totalPages, page, onClickPage } = useMyTierlist()
  return (
    <S.Container>
      <S.Title>내 티어리스트</S.Title>
      {myList.length > 0 ? (
        <S.Content>
          <S.List>
            {myList.map((post) => (
              <MyTierlistCard key={post.id} post={post} />
            ))}
          </S.List>
          <Pagination count={totalPages} page={page} onChange={onClickPage} />
        </S.Content>
      ) : (
        <div>작성한 티어리스트가 없습니다.</div>
      )}
    </S.Container>
  )
}

export default MyTierlistPage
