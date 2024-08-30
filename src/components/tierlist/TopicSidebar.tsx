import React from 'react'
import * as S from '@styles/tierlist/TopicSidebar.style'
import { ReactComponent as Search } from '@assets/icon/search.svg'
import useTopicSideBar from '@hooks/tierlist/useTopicSideBar'
import { Pagination } from '@mui/material'
import { abbreviateNumber } from '@utils/common/searchBarUtil'
import { colors } from '@constants/colors'

type Props = {
  closeSidebar?: () => void
}

const TopicSidebar = ({ closeSidebar }: Props) => {
  const {
    topicList,
    page,
    totalPages,
    isMobileAndTablet,
    onChangeKeyword,
    onClickPage,
    onClickTopic,
  } = useTopicSideBar()
  return (
    <S.Container>
      <S.Title>토픽</S.Title>
      <S.SearchBarContainer>
        <Search
          width={isMobileAndTablet ? 20 : 14}
          height={isMobileAndTablet ? 20 : 14}
          fill={colors.grey.primary}
        />
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
