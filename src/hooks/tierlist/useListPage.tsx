import {
  getSingleCategory,
  getSingleTopic,
  getTierlist,
  toggleFavorite,
} from '@apis/tierlist/listPageApi'
import { userState } from '@atom/userAtom'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { FILTER } from 'types/common/pagination.type'
import { TierlistErrorType } from 'types/tierlist/category.type'
import { PostType } from 'types/tierlist/tierlist.type'

const useListPage = () => {
  const searchRef = useRef<HTMLInputElement>(null)
  const { categoryId, topicId } = useParams()
  const [categoryName, setCategoryName] = useState('')
  const [topicName, setTopicName] = useState('')
  const [isFavorite, setIsFavorite] = useState(false)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [keyword, setKeyword] = useState('')
  const [recentPostList, setRecentPostList] = useState<PostType[]>([])
  const [hotPostList, setHotPostList] = useState<PostType[]>([])
  const user = useRecoilValue(userState)

  const onChangePage = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      if (value === undefined) return
      setPage(value)
    },
    [],
  )

  const onClickFavorite = useCallback(() => {
    if (!user) {
      alert('로그인이 필요합니다.')
      return null
    }

    if (topicId) {
      toggleFavorite('topic', Number(topicId))
        .then(() => {
          setIsFavorite((prev) => !prev)
        })
        .catch((err) => {
          const data = err.response.data as TierlistErrorType
          alert(data.message)
        })
    } else {
      toggleFavorite('category', Number(categoryId))
        .then(() => {
          setIsFavorite((prev) => !prev)
        })
        .catch((err) => {
          const data = err.response.data as TierlistErrorType
          alert(data.message)
        })
    }
  }, [user, topicId, categoryId])

  const getPost = (type: string, id: number, filter: FILTER) => {
    getTierlist(
      `${type}/${id}/tierlist?page=${page - 1}&size=${filter === 'HOT' ? 4 : 16}&query=${filter === 'HOT' ? '' : keyword}&filter=${filter}`,
    )
      .then((res) => {
        if (filter === 'RECENT') {
          setRecentPostList(res.content)
          setTotalPages(res.totalPages)
        } else setHotPostList(res.content)
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
  }, [categoryId, topicId])

  // 카테고리, 토픽 이름
  useEffect(() => {
    let auth = true
    if (!user) {
      auth = false
    }

    if (topicId) {
      getSingleTopic(Number(topicId), auth)
        .then((res) => {
          setCategoryName(res.category.name)
          setTopicName(res.name)
          setIsFavorite(res.isFavorite)
        })
        .catch((err) => {
          const data = err.response.data as TierlistErrorType

          alert(data.message)
        })
    } else {
      getSingleCategory(Number(categoryId), auth)
        .then((res) => {
          setCategoryName(res.name)
          setIsFavorite(res.isFavorite)
        })
        .catch((err) => {
          const data = err.response.data as TierlistErrorType

          alert(data.message)
        })
    }
  }, [topicId, categoryId])

  const onClickSearch = useCallback(() => {
    if (searchRef.current) {
      setKeyword(searchRef.current.value)
    }
  }, [searchRef.current])

  return {
    searchRef,
    page,
    totalPages,
    recentPostList,
    hotPostList,
    categoryName,
    topicName,
    isFavorite,
    onChangePage,
    onClickSearch,
    onClickFavorite,
  }
}

export default useListPage
