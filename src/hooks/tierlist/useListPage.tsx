import { getTierlist } from '@apis/tierlist/listPageApi'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FILTER } from 'types/common/pagination.type'
import { TierlistErrorType } from 'types/tierlist/category.type'
import { PostType } from 'types/tierlist/tierlist.type'

const useListPage = () => {
  const searchRef = useRef<HTMLInputElement>(null)
  const { categoryId, topicId } = useParams()
  const [page, setPage] = useState(1)
  //   const [totalPages, setTotalPages] = useState(0)
  const [keyword, setKeyword] = useState('')
  const [recentPostList, setRecentPostList] = useState<PostType[]>([])
  const [hotPostList, setHotPostList] = useState<PostType[]>([])
  const onChangePage = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      if (value === undefined) return
      console.log(value)

      setPage(value)
    },
    [],
  )

  const getPost = (type: string, id: number, filter: FILTER) => {
    getTierlist(
      `${type}/${id}/tierlist?pageCount=${page}&pageSize=${filter === 'HOT' ? 4 : 16}&query=${filter === 'HOT' ? '' : keyword}&filter=${filter}`,
    )
      .then((res) => {
        if (filter === 'RECENT') setRecentPostList(res)
        else setHotPostList(res)
      })
      .catch((err) => {
        const data = err.response.data as TierlistErrorType

        alert(data.message)
      })
  }

  // 티어리스트 가져오기
  useEffect(() => {
    if (topicId) {
      getPost('topic', Number(topicId), 'RECENT')
    } else {
      getPost('category', Number(categoryId), 'RECENT')
    }
  }, [keyword, page])

  // 인기 티어리스트 가져오기
  useEffect(() => {
    if (topicId) {
      getPost('topic', Number(topicId), 'HOT')
    } else {
      getPost('category', Number(categoryId), 'HOT')
    }
  }, [])

  const onClickSearch = useCallback(() => {
    if (searchRef.current) {
      setKeyword(searchRef.current.value)
    }
  }, [searchRef.current])

  return {
    searchRef,
    page,
    recentPostList,
    hotPostList,
    onChangePage,
    onClickSearch,
  }
}

export default useListPage
