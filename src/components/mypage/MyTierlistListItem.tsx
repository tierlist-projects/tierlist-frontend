import Tag from '@components/common/Tag'
import { images } from '@constants/images'
import * as S from '@styles/mypage/MyTierlistCard.style'
import { PostType } from 'types/tierlist/tierlist.type'
import { abbreviateNumber } from '@utils/common/searchBarUtil'
import Toggle from './Toggle'

type Props = {
  post: PostType
}

const MyTierlistListItem = ({ post }: Props) => {
  return (
    <S.ListItemContainer>
      <img
        src={
          post.thumbnailImage
            ? `https://image.tierlist.site/tierlist/${post.thumbnailImage}`
            : images.common.noImage
        }
        alt="썸네일"
      />
      <S.PostInfoContainer>
        <S.Title>{post.title}</S.Title>
        <S.TagBlock>
          <Tag
            categoryId={post.topic.category.id}
            name={post.topic.category.name}
            type="category"
          />
          <Tag
            categoryId={post.topic.category.id}
            name={post.topic.name}
            type="topic"
            topicId={post.topic.id}
          />
        </S.TagBlock>

        <S.NumericalInfo>
          <S.NumberWithIcon>
            <img src={images.common.postCard.heart} alt="좋아요" />
            <p>{abbreviateNumber(post.likesCount)}</p>
          </S.NumberWithIcon>
          <S.NumberWithIcon>
            <img src={images.common.postCard.comment} alt="댓글" />
            <p>{abbreviateNumber(post.commentsCount)}</p>
          </S.NumberWithIcon>
          {/* <S.NumberWithIcon>
              <img src={images.common.postCard.views} alt="조회수" />
              <p>{abbreviateNumber(post.viewCount)}</p>
            </S.NumberWithIcon> */}
        </S.NumericalInfo>
        <Toggle tierlistId={post.id} initialState={post.isPublished} />
      </S.PostInfoContainer>
    </S.ListItemContainer>
  )
}

export default MyTierlistListItem
