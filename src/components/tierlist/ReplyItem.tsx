import React from 'react'
import * as S from '@styles/tierlist/CommentItem.style'
import { images } from '@constants/images'
import { colors } from '@constants/colors'

const ReplyItem = () => {
  return (
    <S.OriginComment>
      <S.ProfileImg src={images.cat} alt="프로필사진" />
      <S.Content>
        <S.TopBlock>
          <S.CommentInfo>
            <p className="nickname">닉네임</p>
            <p className="date">2024.03.31 10:22</p>
          </S.CommentInfo>
          <S.ButtonBlock>
            <S.Button type="button" color={colors.primary[400]}>
              수정
            </S.Button>
            <S.Button type="button" color={colors.error}>
              삭제
            </S.Button>
          </S.ButtonBlock>
        </S.TopBlock>
        <S.CommentText>댓글내용입니다.</S.CommentText>
      </S.Content>
    </S.OriginComment>
  )
}

export default ReplyItem
