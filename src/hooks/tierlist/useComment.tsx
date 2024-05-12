import { getComments, postComment } from '@apis/tierlist/tierlistDetailApi'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TierlistErrorType } from 'types/tierlist/category.type'
import { CommentType } from 'types/tierlist/comment.type'

const useComment = () => {
  const tierlistId = Number(useParams().id)
  const [commentList, setCommentList] = useState<CommentType[]>([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [totalElements, setTotalElements] = useState(0)

  const commentRef = useRef<HTMLTextAreaElement>(null)

  const getCommentList = useCallback(() => {
    if (!tierlistId) return

    getComments(tierlistId, page, 10)
      .then((res) => {
        setCommentList(res.content)
        setTotalPages(res.totalPages)
        setTotalElements(res.totalElements)
      })
      .catch((err) => {
        const data = err.response.data as TierlistErrorType
        alert(data.message)
      })
  }, [tierlistId, page])

  const onChangePage = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value)
    },
    [],
  )

  const onClickRegist = useCallback(() => {
    if (!commentRef.current || commentRef.current.value === '') {
      alert('댓글을 입력해주세요.')
      return null
    }

    postComment(tierlistId, {
      content: commentRef.current.value,
      parentCommentId: null,
    })
      .then(() => {
        getCommentList()
      })
      .catch((err) => {
        const data = err.response.data as TierlistErrorType
        alert(data.message)
      })
  }, [])

  useEffect(() => {
    getCommentList()
  }, [tierlistId, page])

  return {
    commentList,
    page,
    totalPages,
    totalElements,
    commentRef,
    onChangePage,
    onClickRegist,
  }
}

export default useComment
