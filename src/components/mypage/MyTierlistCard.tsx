import React, { useCallback, useRef } from 'react'
import useDetectClose from '@hooks/common/useDetectClose'
import * as S from '@styles/mypage/MyTierlistCard.style'
import { images } from '@constants/images'
import { useNavigate } from 'react-router-dom'
import { PostType } from 'types/tierlist/tierlist.type'
import { abbreviateNumber } from '@utils/common/searchBarUtil'
import Tag from '@components/common/Tag'
import Toggle from './Toggle'

type Props = {
  post: PostType
}

const MyTierlistCard = ({ post }: Props) => {
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
    <S.Container onClick={() => navigate(`/tierlist-detail/${post.id}`)}>
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
        alt="티어리스트 썸네일"
      />
      <S.PostInfoContainer>
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
        <S.Title>{post.title}</S.Title>
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
    </S.Container>
  )
}

export default MyTierlistCard
