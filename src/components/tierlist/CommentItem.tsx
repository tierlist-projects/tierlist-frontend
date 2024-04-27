import React, { useCallback, useState } from 'react'
import * as S from '@styles/tierlist/CommentItem.style'
import { images } from '@constants/images'
import { colors } from '@constants/colors'
import ReplyItem from './ReplyItem'

const CommentItem = () => {
  const [isActiveReply, setIsActiveReply] = useState(false)
  const onClickReplyButton = useCallback(() => {
    setIsActiveReply((prev) => !prev)
  }, [])

  return (
    <S.Container>
      <S.OriginComment>
        <S.ProfileImg src={images.cat} alt="프로필사진" />
        <S.Content>
          <S.TopBlock>
            <S.CommentInfo>
              <p className="nickname">닉네임</p>
              <p className="date">2024.03.31 10:22</p>
            </S.CommentInfo>
            <S.ButtonBlock>
              <S.Button
                type="button"
                color={colors.grey.primary}
                onClick={onClickReplyButton}
              >
                답글
              </S.Button>
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
      {isActiveReply && (
        <S.Input>
          <textarea placeholder="답글을 입력하세요." />
          <button type="button">등록</button>
        </S.Input>
      )}
      <S.ReplyList>
        <ReplyItem />
      </S.ReplyList>
    </S.Container>
  )
}

export default CommentItem
