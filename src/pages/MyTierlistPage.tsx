import React from 'react'
import * as S from '@styles/mypage/MyTierlistPage.style'
import MyTierlistCard from '@components/mypage/MyTierlistCard'
import useMyTierlist from '@hooks/mypage/useMyTierlist'
import { Pagination } from '@mui/material'
import { Mobile, TabletAndPC } from '@components/common/MediaQuery'
import MyTierlistListItem from '@components/mypage/MyTierlistListItem'

const MyTierlistPage = () => {
  const { myList, totalPages, page, onClickPage } = useMyTierlist()
  return (
    <S.Container>
      <S.Title>내 티어리스트</S.Title>
      {myList.length > 0 ? (
        <S.Content>
          <TabletAndPC>
            <S.List>
              {myList.map((post) => (
                <MyTierlistCard key={post.id} post={post} />
              ))}
            </S.List>
          </TabletAndPC>
          <Mobile>
            <S.ListOnMobile>
              {myList.map((post) => (
                <MyTierlistListItem key={post.id} post={post} />
              ))}
            </S.ListOnMobile>
          </Mobile>
          <Pagination count={totalPages} page={page} onChange={onClickPage} />
        </S.Content>
      ) : (
        <div>작성한 티어리스트가 없습니다.</div>
      )}
    </S.Container>
  )
}

export default MyTierlistPage
