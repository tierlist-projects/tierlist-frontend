import { createCategory } from '@apis/tierlist/createModalApi'
import useDebounce from '@hooks/useDebounce'
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CategoryType, TopicType } from 'types/tierlist/category.type'

const useCreateModal = () => {
  const navigate = useNavigate()

  const [category, setCategory] = useState('')
  const [categoryList, setCategoryList] = useState<CategoryType[]>([])
  const [isDropCategories, setIsDropCategories] = useState(false)

  const [topic, setTopic] = useState('')
  const [topicList, setTopicList] = useState<TopicType[]>([])
  const [isDropTopics, setIsDropTopics] = useState(false)

  const debouncedCategory = useDebounce(category, 1000)
  const debouncedTopic = useDebounce(topic, 1000)

  useEffect(() => {
    setCategoryList([{ id: 1, name: '카테고리1', isFavorite: false }])
    console.log('디바인스 카테고리')
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
