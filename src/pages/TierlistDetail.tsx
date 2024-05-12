import { useCallback, useState } from 'react'
import * as S from '@styles/tierlist/TierlistDetail.style'
import { images } from '@constants/images'
import TierlistView from '@components/tierlist/TierlistView'
import Comment from '@components/tierlist/Comment'
import useTierlistDetail from '@hooks/tierlist/useTierlistDetail'
import { abbreviateNumber } from '@utils/common/searchBarUtil'
import { formatDate } from '@utils/tierlist/tierlistUtil'

const TierlistDetail = () => {
  const { postDetail, onClickLikeButton } = useTierlistDetail()

  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const onClickMenu = useCallback(() => {
    setIsOpenMenu((prev) => !prev)
  }, [])

  if (!postDetail) return null

  return (
    <S.Container>
      {postDetail.myTierlist && (
        <S.Menu>
          <button type="button" onClick={onClickMenu}>
            <img src={images.common.dotMenu} alt="메뉴" />
          </button>
          {isOpenMenu && (
            <S.DropMenu>
              <li>
                <button type="button">수정</button>
              </li>
              <li>
                <button type="button">삭제</button>
              </li>
            </S.DropMenu>
          )}
        </S.Menu>
      )}
      <S.TitleBlock>
        <p className="category">
          {postDetail.topic.category.name} / {postDetail.topic.name}
        </p>
        <p className="title">{postDetail.title}</p>
        <S.PostInfo>
          <div className="left">
            <p>{postDetail.writer.nickname}</p>
            <div className="view">
              <img src={images.common.postCard.views} alt="조회수" />
              <p>{abbreviateNumber(1000)}</p>
            </div>
          </div>
          <p>{formatDate(postDetail.createdAt)}</p>
        </S.PostInfo>
      </S.TitleBlock>
      <TierlistView ranks={postDetail.ranks} />
      <S.Cotent>{postDetail.content}</S.Cotent>
      <S.LikeButton onClick={onClickLikeButton}>
        <img
          src={
            postDetail.liked
              ? images.tierlist.like.fullHeart
              : images.tierlist.like.emptyHeart
          }
          alt="좋아요"
        />
        {abbreviateNumber(postDetail.likesCount)}
      </S.LikeButton>
      <Comment />
    </S.Container>
  )
}

export default TierlistDetail
