import React, { useCallback, useState } from 'react'
import * as S from '@styles/tierlist/CommentItem.style'
import { colors } from '@constants/colors'
import { CommentType } from 'types/tierlist/comment.type'
import { formatDate } from '@utils/tierlist/tierlistUtil'
// import ReplyItem from './ReplyItem'

type Props = {
  comment: CommentType
}

const CommentItem = ({ comment }: Props) => {
  const [isActiveReply, setIsActiveReply] = useState(false)
  const onClickReplyButton = useCallback(() => {
    setIsActiveReply((prev) => !prev)
  }, [])

  return (
    <S.Container>
      <S.OriginComment>
        <S.ProfileImg
          src={`https://image.tierlist.site/tierlist/${comment.writer.profileImage}`}
          alt="프로필사진"
        />
        <S.Content>
          <S.TopBlock>
            <S.CommentInfo>
              <p className="nickname">{comment.writer.nickname}</p>
              <p className="date">{formatDate(comment.createdAt)}</p>
            </S.CommentInfo>
            <S.ButtonBlock>
              <S.Button
                type="button"
                color={colors.grey.primary}
                onClick={onClickReplyButton}
              >
                답글
              </S.Button>
              {comment.myComment && (
                <>
                  <S.Button type="button" color={colors.primary[400]}>
                    수정
                  </S.Button>
                  <S.Button type="button" color={colors.error}>
                    삭제
                  </S.Button>
                </>
              )}
            </S.ButtonBlock>
          </S.TopBlock>
          <S.CommentText>{comment.content}</S.CommentText>
        </S.Content>
      </S.OriginComment>
      {isActiveReply && (
        <S.Input>
          <textarea placeholder="답글을 입력하세요." />
          <button type="button">등록</button>
        </S.Input>
      )}
      {/* <S.ReplyList>
        <ReplyItem />
      </S.ReplyList> */}
    </S.Container>
  )
}

export default CommentItem
