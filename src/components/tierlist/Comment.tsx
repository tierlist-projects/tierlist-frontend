import React from 'react'
import * as S from '@styles/tierlist/Comment.style'
import Pagination from '@mui/material/Pagination'
import useComment from '@hooks/tierlist/useComment'
import CommentItem from './CommentItem'

const Comment = () => {
  const {
    commentList,
    page,
    totalPages,
    totalElements,
    commentRef,
    onChangePage,
    onClickRegist,
  } = useComment()
  return (
    <S.Container>
      <S.Title>댓글({totalElements})</S.Title>
      <S.Input>
        <textarea placeholder="댓글을 입력하세요." ref={commentRef} />
        <button type="button" onClick={onClickRegist}>
          등록
        </button>
      </S.Input>
      {commentList.length > 0 && (
        <S.CommentList>
          {commentList.map((comment) => (
            <CommentItem comment={comment} key={comment.id} />
          ))}
          <Pagination count={totalPages} page={page} onChange={onChangePage} />
        </S.CommentList>
      )}
    </S.Container>
  )
}

export default Comment
