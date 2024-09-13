import React from 'react'
import * as S from '@styles/mypage/MyTierlistPage.style'
import MyTierlistCard from '@components/mypage/MyTierlistCard'
import useMyTierlist from '@hooks/mypage/useMyTierlist'
import { Pagination } from '@mui/material'
import { Mobile, TabletAndPC } from '@components/common/MediaQuery'
import MyTierlistListItem from '@components/mypage/MyTierlistListItem'
import Loading from '@components/common/Loading'

const MyTierlistPage = () => {
  const { myList, totalPages, page, isLoading, onClickPage } = useMyTierlist()
  return (
    <S.Container className="my-tierlist">
      <S.Title>내 티어리스트</S.Title>
      {(() => {
        if (isLoading) return <Loading />

        if (myList.length > 0) {
          return (
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
              <Pagination
                count={totalPages}
                page={page}
                onChange={onClickPage}
              />
            </S.Content>
          )
        }
        return <div>작성한 티어리스트가 없습니다.</div>
      })()}
    </S.Container>
  )
}

export default MyTierlistPage
