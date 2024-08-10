import React from 'react'
import * as S from '@styles/tierlist/TopicSidebar.style'
import { images } from '@constants/images'
import useTopicSideBar from '@hooks/tierlist/useTopicSideBar'
import { Pagination } from '@mui/material'
import { abbreviateNumber } from '@utils/common/searchBarUtil'

type Props = {
  closeSidebar?: () => void
}

const TopicSidebar = ({ closeSidebar }: Props) => {
  const {
    topicList,
    page,
    totalPages,
    onChangeKeyword,
    onClickPage,
    onClickTopic,
  } = useTopicSideBar()
  return (
    <S.Container>
      <S.Title>토픽</S.Title>
      <S.SearchBarContainer>
        <img src={images.common.searchBar.search} alt="토픽 검색" />
        <S.Search type="text" onChange={onChangeKeyword} />
      </S.SearchBarContainer>
      <S.TopicList>
        {topicList.length > 0 &&
          topicList.map((topic) => (
            <S.TopicItem
              key={topic.id}
              onClick={() => onClickTopic(topic.id, closeSidebar)}
            >
              {topic.name}({abbreviateNumber(topic.favoriteCount)})
            </S.TopicItem>
          ))}
      </S.TopicList>
      {totalPages > 0 && (
        <Pagination
          count={totalPages}
          page={page}
          size="small"
          onChange={onClickPage}
        />
      )}
    </S.Container>
  )
}

export default TopicSidebar
