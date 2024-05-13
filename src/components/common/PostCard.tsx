import React from 'react'
import * as S from '@styles/common/PostCard.style'
import { images } from '@constants/images'
import { PostType } from 'types/tierlist/tierlist.type'
import { useNavigate } from 'react-router-dom'
import { abbreviateNumber } from '@utils/common/searchBarUtil'

type Props = {
  post: PostType
}

const PostCard = ({ post }: Props) => {
  const navigate = useNavigate()
  return (
    <S.PostCardContainer
      onClick={() => {
        navigate(`/tierlist-detail/${post.id}`)
      }}
    >
      <img
        src="data:image/jpeg;base64,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"
        alt="티어리스트"
      />
      <S.PostInfoContainer>
        <S.Title>{post.title}</S.Title>
        <S.CategoryAndAuthor>
          {post.topic.category.name} / {post.topic.name}
        </S.CategoryAndAuthor>
        <S.BottomBlock>
          <S.CategoryAndAuthor>{post.writer.nickname}</S.CategoryAndAuthor>
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

export default PostCard
