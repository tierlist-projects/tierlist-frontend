import React from 'react'
import * as S from '@styles/tierlist/Comment.style'
import Pagination from '@mui/material/Pagination'
import useComment from '@hooks/tierlist/useComment'
import CommentItem from './CommentItem'
import ReplyItem from './ReplyItem'

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
        <button type="button" onClick={() => onClickRegist(commentRef, null)}>
          등록
        </button>
      </S.Input>
      {commentList.length > 0 ? (
        <>
          <S.CommentList>
            {commentList.map((comment) => {
              if (comment.parentComment)
                return (
                  <CommentItem
                    comment={comment}
                    onClickRegist={onClickRegist}
                    key={comment.id}
                  />
                )
              return <ReplyItem comment={comment} key={comment.id} />
            })}
          </S.CommentList>
          <Pagination count={totalPages} page={page} onChange={onChangePage} />
        </>
      ) : (
        <S.EmptyText>댓글이 없습니다.</S.EmptyText>
      )}
    </S.Container>
  )
}

export default Comment
