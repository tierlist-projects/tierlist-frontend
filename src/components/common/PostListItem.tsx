import { images } from '@constants/images'
import * as S from '@styles/common/PostListItem.style'
import { PostType } from 'types/tierlist/tierlist.type'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { userState } from '@atom/userAtom'
import { ReactComponent as Heart } from '@assets/icon/empty-heart.svg'
import { ReactComponent as Comment } from '@assets/icon/comment.svg'
import { colors } from '@constants/colors'
import Tag from './Tag'

type Props = {
  post: PostType
}

const PostListItem = ({ post }: Props) => {
  const navigate = useNavigate()
  const user = useRecoilValue(userState)

  return (
    <S.Container
      onClick={() => {
        if (!user) {
          alert('로그인이 필요합니다.')
          navigate('/login')
        } else {
          navigate(`/tierlist-detail/${post.id}`)
        }
      }}
    >
      <img
        src={
          post.thumbnailImage
            ? `https://image.tierlist.site/tierlist/${post.thumbnailImage}`
            : images.common.noImage
        }
        alt=""
      />
      <S.InfoBlock>
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
            topicId={post.topic.id}
            type="topic"
          />
        </S.TagBlock>
        <S.Author>{post.writer.nickname}</S.Author>
        <S.NumericalInfo>
          <S.NumberWithIcon>
            <Heart width={16} height={16} fill={colors.heart} />
            <p>{post.likesCount}</p>
          </S.NumberWithIcon>
          <S.NumberWithIcon>
            <Comment width={16} height={16} fill={colors.grey.primary} />
            <p>{post.commentsCount}</p>
          </S.NumberWithIcon>
          {/* <S.NumberWithIcon>
            <img src={images.common.postCard.heart} alt="조회수" />
            <p>{post.likesCount}</p>
          </S.NumberWithIcon> */}
        </S.NumericalInfo>
      </S.InfoBlock>
    </S.Container>
  )
}

export default PostListItem
