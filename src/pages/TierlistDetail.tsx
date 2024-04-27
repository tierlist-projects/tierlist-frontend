import React from 'react'
import * as S from '@styles/tierlist/TierlistDetail.style'
import { images } from '@constants/images'
import TierlistView from '@components/tierlist/TierlistView'
import Comment from '@components/tierlist/Comment'

const TierlistDetail = () => {
  return (
    <S.Container>
      <S.TitleBlock>
        <p className="category">카테고리 / 토픽</p>
        <p className="title">제목</p>
        <S.PostInfo>
          <div className="left">
            <p>작성자</p>
            <div className="view">
              <img src={images.common.postCard.views} alt="조회수" />
              <p>1.2K</p>
            </div>
          </div>
          <p>2024.03.20 19:39</p>
        </S.PostInfo>
      </S.TitleBlock>
      <TierlistView />
      <S.Cotent>
        내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!내용입니다!!!!
      </S.Cotent>
      <S.LikeButton>
        <img src={images.common.postCard.heart} alt="좋아요" />
        1K
      </S.LikeButton>
      <Comment />
    </S.Container>
  )
}

export default TierlistDetail
