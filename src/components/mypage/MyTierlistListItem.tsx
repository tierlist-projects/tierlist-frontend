import Tag from '@components/common/Tag'
import { images } from '@constants/images'
import * as S from '@styles/mypage/MyTierlistListItem.style'
import { PostType } from 'types/tierlist/tierlist.type'
import { abbreviateNumber } from '@utils/common/searchBarUtil'
import { useNavigate } from 'react-router-dom'
import useDetectClose from '@hooks/common/useDetectClose'
import { useCallback, useRef } from 'react'
import Toggle from './Toggle'

type Props = {
  post: PostType
}

const MyTierlistListItem = ({ post }: Props) => {
  const navigate = useNavigate()
  const menuRef = useRef<HTMLDivElement>(null)
  const [isDrop, setIsDrop] = useDetectClose(menuRef, false)

  const onClickRemove = () => {
    console.log('삭제')
  }

  const onClickMenu: React.MouseEventHandler<HTMLButtonElement> = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      setIsDrop((prev) => !prev)
    },
    [isDrop],
  )

  const onClickModify = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    navigate(`/tierlist-modify/${post.id}`)
  }, [])

  return (
    <S.ListItemContainer>
      <S.Menu ref={menuRef}>
        <button type="button" onClick={onClickMenu}>
          <img src={images.common.dotMenu} alt="메뉴" />
        </button>
        {isDrop && (
          <S.DropMenu>
            <li>
              <button type="button" onClick={onClickModify}>
                수정
              </button>
            </li>
            <li>
              <button type="button" onClick={onClickRemove}>
                삭제
              </button>
            </li>
          </S.DropMenu>
        )}
      </S.Menu>
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
