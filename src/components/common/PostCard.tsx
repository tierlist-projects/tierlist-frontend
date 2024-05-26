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
        src={
          post.thumbnailImage
            ? `https://image.tierlist.site/tierlist/${post.thumbnailImage}`
            : images.common.noImage
        }
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
