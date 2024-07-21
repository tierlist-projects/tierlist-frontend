import React from 'react'
import * as S from '@styles/common/PostCard.style'
import { images } from '@constants/images'
import { PostType } from 'types/tierlist/tierlist.type'
import { useNavigate } from 'react-router-dom'
import { abbreviateNumber } from '@utils/common/searchBarUtil'
import { useRecoilValue } from 'recoil'
import { userState } from '@atom/userAtom'
import Tag from './Tag'

type Props = {
  post: PostType
}

const PostCard = ({ post }: Props) => {
  const navigate = useNavigate()
  const user = useRecoilValue(userState)
  return (
    <S.PostCardContainer
      onClick={() => {
        if (!user) alert('로그인이 필요합니다.')
        else navigate(`/tierlist-detail/${post.id}`)
      }}
    >
      <img
        src={
          post.thumbnailImage
            ? `https://image.tierlist.site/tierlist/${post.thumbnailImage}`
            : images.common.noImage
        }
        alt="티어리스트"
      />
      <S.PostInfoContainer>
        <S.TagBlock>
          <Tag
            type="category"
            categoryId={post.topic.category.id}
            name={post.topic.category.name}
          />
          <Tag
            type="topic"
            categoryId={post.topic.category.id}
            topicId={post.topic.id}
            name={post.topic.name}
          />
        </S.TagBlock>
        <S.Title>{post.title}</S.Title>
        <S.Author>{post.writer.nickname}</S.Author>
        <S.BottomBlock>
          <S.NumericalInfo>
            <S.NumberWithIcon>
              <img src={images.common.postCard.heart} alt="좋아요 수" />
              <p>{abbreviateNumber(post.likesCount)}</p>
            </S.NumberWithIcon>
            <S.NumberWithIcon>
              <img src={images.common.postCard.comment} alt="댓글 수" />
              <p>{abbreviateNumber(post.commentsCount)}</p>
            </S.NumberWithIcon>
            {/* <S.NumberWithIcon>
              <img src={images.common.postCard.views} alt="조회수" />
              <p>{post.viewCount}</p>
            </S.NumberWithIcon> */}
          </S.NumericalInfo>
        </S.BottomBlock>
      </S.PostInfoContainer>
    </S.PostCardContainer>
  )
}

export default React.memo(PostCard)
