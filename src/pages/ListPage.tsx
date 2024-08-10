import * as S from '@styles/tierlist/ListPage.style'
import { images } from '@constants/images'
import PostCard from '@components/common/PostCard'
import Pagination from '@mui/material/Pagination'
import TopicSidebar from '@components/tierlist/TopicSidebar'
import useListPage from '@hooks/tierlist/useListPage'
import { Link } from 'react-router-dom'
import {
  Mobile,
  MobileAndTablet,
  PC,
  TabletAndPC,
} from '@components/common/MediaQuery'
import PostListItem from '@components/common/PostListItem'
import useSidebar from '@hooks/useSidebar'
import CButton from '@components/common/CButton'

const ListPage = () => {
  const {
    categoryId,
    searchRef,
    page,
    totalPages,
    recentPostList,
    hotPostList,
    categoryName,
    topicName,
    isFavorite,
    onChangePage,
    onClickSearch,
    onClickFavorite,
    moveToCategory,
  } = useListPage()

  const { Sidebar, isOpen, closeSidebar, openSidebar } = useSidebar()

  return (
    <S.Container>
      <S.TitleBlock>
        <button type="button" onClick={onClickFavorite}>
          <img
            src={
              isFavorite
                ? images.common.favorites.fullStar
                : images.common.favorites.emptyStar
            }
            alt="즐겨찾기"
            className="favorite"
          />
        </button>
        <S.Title>
          <Link to={`/tierlist/${categoryId}`} onClick={moveToCategory}>
            {categoryName}
          </Link>
          {topicName && ` / ${topicName}`}
        </S.Title>
        <MobileAndTablet>
          <CButton
            text="토픽"
            fontSize={14}
            radius={5}
            medium
            onClick={openSidebar}
          />
        </MobileAndTablet>
      </S.TitleBlock>
      <S.TierlistBlock>
        <S.Title>인기 티어리스트</S.Title>
        {hotPostList.length > 0 ? (
          <>
            <TabletAndPC>
              <S.List>
                {hotPostList.map((post) => (
                  <PostCard key={`hotPost${post.id}`} post={post} />
                ))}
              </S.List>
            </TabletAndPC>
            <Mobile>
              <S.ListMobile type="HOT">
                {hotPostList.map((post) => (
                  <PostListItem key={`hotPost${post.id}`} post={post} />
                ))}
              </S.ListMobile>
            </Mobile>
          </>
        ) : (
          <S.EmptyContainer>인기 티어리스트가 없습니다.</S.EmptyContainer>
        )}
      </S.TierlistBlock>
      <S.TierlistBlock>
        <S.Title>티어리스트</S.Title>
        {recentPostList.length > 0 ? (
          <>
            <TabletAndPC>
              <S.List>
                {recentPostList.map((post) => (
                  <PostCard key={`recentPost${post.id}`} post={post} />
                ))}
              </S.List>
            </TabletAndPC>
            <Mobile>
              <S.ListMobile type="NONE">
                {recentPostList.map((post) => (
                  <PostListItem key={`recentPost${post.id}`} post={post} />
                ))}
              </S.ListMobile>
            </Mobile>
          </>
        ) : (
          <S.EmptyContainer>티어리스트가 없습니다.</S.EmptyContainer>
        )}
        <S.BottomBlock>
          {recentPostList.length > 0 && (
            <Pagination
              count={totalPages}
              page={page}
              onChange={onChangePage}
            />
          )}
          <S.TierlistSearch>
            <select>
              <option>제목</option>
              <option>내용</option>
              <option>내용+제목</option>
            </select>
            <S.SearchBarContainer>
              <S.Search
                type="text"
                placeholder="검색어를 입력하세요."
                ref={searchRef}
              />
              <button type="button" onClick={onClickSearch}>
                <img
                  src={images.common.searchBar.search}
                  alt="티어리스트 검색"
                />
              </button>
            </S.SearchBarContainer>
          </S.TierlistSearch>
        </S.BottomBlock>
      </S.TierlistBlock>
      <PC>
        <TopicSidebar />
      </PC>

      <MobileAndTablet>
        <Sidebar isOpen={isOpen} closeSidebar={closeSidebar}>
          <TopicSidebar closeSidebar={closeSidebar} />
        </Sidebar>
      </MobileAndTablet>
    </S.Container>
  )
}

export default ListPage
