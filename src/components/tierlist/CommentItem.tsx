import React, { RefObject, useCallback, useRef, useState } from 'react'
import * as S from '@styles/tierlist/CommentItem.style'
import { colors } from '@constants/colors'
import { CommentType } from 'types/tierlist/comment.type'
import { formatDate } from '@utils/tierlist/tierlistUtil'
import { images } from '@constants/images'

type Props = {
  comment: CommentType
  onClickRegist: (
    elem: RefObject<HTMLTextAreaElement>,
    parentId: number,
  ) => void
}

const CommentItem = ({ comment, onClickRegist }: Props) => {
  const [isActiveReply, setIsActiveReply] = useState(false)
  const onClickReplyButton = useCallback(() => {
    setIsActiveReply((prev) => !prev)
  }, [])

  const replyRef = useRef<HTMLTextAreaElement>(null)

  return (
    <S.Container>
      <S.OriginComment>
        <S.ProfileImg
          src={
            comment.writer.profileImage
              ? `https://image.tierlist.site/tierlist/${comment.writer.profileImage}`
              : images.common.defaultProfile
          }
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
            </S.ButtonBlock>
          </S.TopBlock>
          <S.CommentText>{comment.content}</S.CommentText>
        </S.Content>
      </S.OriginComment>
      {isActiveReply && (
        <S.Input>
          <textarea placeholder="답글을 입력하세요." ref={replyRef} />
          <button
            type="button"
            onClick={() => {
              onClickRegist(replyRef, comment.id)
              setIsActiveReply(false)
            }}
          >
            등록
          </button>
        </S.Input>
      )}
    </S.Container>
  )
}

export default CommentItem
