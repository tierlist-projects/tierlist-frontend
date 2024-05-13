import React, { useCallback, useRef } from 'react'
import useDetectClose from '@hooks/common/useDetectClose'
import * as S from '@styles/mypage/MyTierlistCard.style'
import { images } from '@constants/images'
import { useNavigate } from 'react-router-dom'
import { PostType } from 'types/tierlist/tierlist.type'
import { abbreviateNumber } from '@utils/common/searchBarUtil'
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

  return (
    <S.Container onClick={() => navigate(`/tierlist-detail/${post.id}`)}>
      <S.Menu ref={menuRef}>
        <button type="button" onClick={onClickMenu}>
          <img src={images.common.dotMenu} alt="메뉴" />
        </button>
        {isDrop && (
          <S.DropMenu>
            <li>
              <button
                type="button"
                onClick={() => navigate('/tierlist-modify/1')}
              >
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
        src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20120222_75%2Fjhn_01_1329865502587f7ug7_JPEG%2Fd1.jpg&type=a340"
        alt="티어리스트 썸네일"
      />
      <S.PostInfoContainer>
        <S.Title>{post.title}</S.Title>
        <S.CategoryAndAuthor>
          {post.topic.category.name} / {post.topic.name}
        </S.CategoryAndAuthor>
        <S.BottomBlock>
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
          <Toggle />
        </S.BottomBlock>
      </S.PostInfoContainer>
    </S.Container>
  )
}

export default MyTierlistCard
