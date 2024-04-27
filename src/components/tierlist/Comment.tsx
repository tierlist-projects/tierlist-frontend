import React from 'react'
import * as S from '@styles/tierlist/Comment.style'
import CommentItem from './CommentItem'

const Comment = () => {
  return (
    <S.Container>
      <S.Title>댓글(100)</S.Title>
      <S.Input>
        <textarea placeholder="댓글을 입력하세요." />
        <button type="button">등록</button>
      </S.Input>
      <S.CommentList>
        <CommentItem />
        <CommentItem />
      </S.CommentList>
    </S.Container>
  )
}

export default Comment
