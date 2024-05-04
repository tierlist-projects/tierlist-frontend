import * as S from '@styles/tierlist/ListPage.style'
import { images } from '@constants/images'
import PostCard from '@components/common/PostCard'
import Pagination from '@mui/material/Pagination'
import TopicSidebar from '@components/tierlist/TopicSidebar'
import useListPage from '@hooks/tierlist/useListPage'

const ListPage = () => {
  const {
    searchRef,
    page,
    recentPostList,
    hotPostList,
    onChangePage,
    onClickSearch,
  } = useListPage()
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
        {hotPostList.length > 0 ? (
          <S.List>
            {hotPostList.map((post) => (
              <PostCard key={`hotPost${post.id}`} post={post} />
            ))}
          </S.List>
        ) : (
          <S.EmptyContainer>인기 티어리스트가 없습니다.</S.EmptyContainer>
        )}
      </S.TierlistBlock>
      <S.TierlistBlock>
        <S.Title>티어리스트</S.Title>
        {recentPostList.length > 0 ? (
          <S.List>
            {recentPostList.map((post) => (
              <PostCard key={`recentPost${post.id}`} post={post} />
            ))}
          </S.List>
        ) : (
          <S.EmptyContainer>티어리스트가 없습니다.</S.EmptyContainer>
        )}
        <S.BottomBlock>
          {recentPostList.length > 0 && (
            <Pagination count={5} page={page} onChange={onChangePage} />
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
      <TopicSidebar />
    </S.Container>
  )
}

export default ListPage
