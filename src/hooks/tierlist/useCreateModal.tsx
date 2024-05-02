import { createCategory, getCategory } from '@apis/tierlist/createModalApi'
import useDebounce from '@hooks/useDebounce'
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CategoryErrorType,
  CategoryType,
  TopicType,
} from 'types/tierlist/category.type'

const useCreateModal = () => {
  const navigate = useNavigate()

  const [category, setCategory] = useState('')
  const [categoryList, setCategoryList] = useState<CategoryType[]>([])
  const [isDropCategories, setIsDropCategories] = useState(false)
  const [categoryPages, setCategoryPages] = useState(0)

  const [topic, setTopic] = useState('')
  const [topicList, setTopicList] = useState<TopicType[]>([])
  const [isDropTopics, setIsDropTopics] = useState(false)

  const debouncedCategory = useDebounce(category, 1000)
  const debouncedTopic = useDebounce(topic, 1000)

  useEffect(() => {
    getCategory({
      pageCount: 1,
      pageSize: 5,
      query: debouncedCategory,
      filter: 'NONE',
    })
      .then((res) => {
        setCategoryList(res.content)
        setCategoryPages(res.totalPages)
      })
      .catch((err) => {
        const data = err.response.data as CategoryErrorType
        if (data.errorCode === 'D-004') {
          alert(data.message)
        }
      })
  }, [debouncedCategory])

  useEffect(() => {
    setTopicList([])
  }, [debouncedTopic])

  const onChangeCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value)
  }

  const onChangeTopic = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(event.target.value)
  }

  const onClickCreateCategory = useCallback(() => {
    if (category === debouncedCategory) {
      createCategory(category)
    }
  }, [category, debouncedCategory])

  const onClickCategory = useCallback(() => {
    console.log('카테고리 선택')
  }, [])

  const onClickTopic = useCallback(() => {
    console.log('토픽 선택')
  }, [])

  return {
    navigate,
    categoryList,
    topicList,
    isDropCategories,
    isDropTopics,
    categoryPages,
    onChangeCategory,
    onChangeTopic,
    onClickCategory,
    onClickTopic,
    setIsDropCategories,
    setIsDropTopics,
    onClickCreateCategory,
  }
}

export default useCreateModal
