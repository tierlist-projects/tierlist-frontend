import { useCallback, useRef } from 'react'
import * as S from '@styles/tierlist/TierlistDetail.style'
import TierlistView from '@components/tierlist/TierlistView'
import Comment from '@components/tierlist/Comment'
import useTierlistDetail from '@hooks/tierlist/useTierlistDetail'
import { abbreviateNumber } from '@utils/common/searchBarUtil'
import { formatDate } from '@utils/tierlist/tierlistUtil'
import useDetectClose from '@hooks/common/useDetectClose'
import { ReactComponent as EmptyHeart } from '@assets/icon/empty-heart.svg'
import { ReactComponent as FullHeart } from '@assets/icon/full-heart.svg'
import { ReactComponent as DotMenu } from '@assets/icon/menu.svg'
import { colors } from '@constants/colors'

const TierlistDetail = () => {
  const { navigate, postDetail, isMobile, onClickLikeButton } =
    useTierlistDetail()

  const menuRef = useRef<HTMLDivElement>(null)
  const [isOpenMenu, setIsOpenMenu] = useDetectClose(menuRef, false)
  const onClickMenu = useCallback(() => {
    setIsOpenMenu((prev) => !prev)
  }, [])

  if (!postDetail) return null

  return (
    <S.Container>
      {postDetail.myTierlist && (
        <S.Menu ref={menuRef}>
          <button type="button" onClick={onClickMenu} aria-label="메뉴">
            <DotMenu
              width={isMobile ? 20 : 24}
              height={isMobile ? 20 : 24}
              stroke="black"
            />
          </button>
          {isOpenMenu && (
            <S.DropMenu>
              <li>
                <button
                  type="button"
                  onClick={() => navigate(`/tierlist-modify/${postDetail.id}`)}
                >
                  수정
                </button>
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
            {/* <div className="view">
              <img src={images.common.postCard.views} alt="조회수" />
              <p>{abbreviateNumber(1000)}</p>
            </div> */}
          </div>
          <p>{formatDate(postDetail.createdAt)}</p>
        </S.PostInfo>
      </S.TitleBlock>
      <TierlistView ranks={postDetail.ranks} />
      <S.Cotent className="allow-drag">{postDetail.content}</S.Cotent>
      <S.LikeButton onClick={onClickLikeButton}>
        {postDetail.liked ? (
          <FullHeart width={28} height={28} fill={colors.heart} />
        ) : (
          <EmptyHeart width={28} height={28} fill={colors.heart} />
        )}
        {abbreviateNumber(postDetail.likesCount)}
      </S.LikeButton>
      <Comment />
    </S.Container>
  )
}

export default TierlistDetail
