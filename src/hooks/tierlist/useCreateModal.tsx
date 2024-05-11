import {
  createCategory,
  createTierlist,
  createTopic,
  getCategory,
  getTopic,
} from '@apis/tierlist/createModalApi'
import useDebounce from '@hooks/useDebounce'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  TierlistErrorType,
  CategoryType,
  TopicType,
} from 'types/tierlist/category.type'

const useCreateModal = () => {
  const navigate = useNavigate()

  const [category, setCategory] = useState('')
  const [categoryList, setCategoryList] = useState<CategoryType[]>([])
  const [isDropCategories, setIsDropCategories] = useState(false)
  const [categoryPages, setCategoryPages] = useState(0)
  const [categoryTotalPages, setCategoryTotalPages] = useState(0)
  const [selectedCategoryId, setSelectedCategoryId] = useState(0)
  const [isSelectCategory, setIsSelectCategory] = useState(false)

  const [topic, setTopic] = useState('')
  const [topicList, setTopicList] = useState<TopicType[]>([])
  const [isDropTopics, setIsDropTopics] = useState(false)
  const [topicPages, setTopicPages] = useState(0)
  const [topicTotalPages, setTopicTotalPages] = useState(0)
  const [selectedTopicId, setSelectedTopicId] = useState(0)
  const [isSelectTopic, setIsSelectTopic] = useState(false)

  const debouncedCategory = useDebounce(category, 500)
  const debouncedTopic = useDebounce(topic, 500)

  const titleRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!debouncedCategory) {
      setIsDropCategories(false)
      setCategoryList([])
      return
    }
    if (isSelectCategory) {
      setIsSelectCategory(false)
      return
    }

    getCategory({
      page: categoryPages,
      size: 5,
      query: debouncedCategory,
      filter: 'NONE',
    })
      .then((res) => {
        setIsDropCategories(true)
        setCategoryList(res.content)
        setCategoryTotalPages(res.totalPages)
      })
      .catch((err) => {
        console.log(err)

        const data = err as TierlistErrorType
        if (data.errorCode === 'D-004') {
          alert(data.message)
        }
      })
  }, [debouncedCategory, categoryPages, isDropCategories])

  useEffect(() => {
    if (!debouncedTopic) {
      setIsDropTopics(false)
      setTopicList([])
      return
    }

    if (isSelectTopic) {
      setIsSelectTopic(false)
      return
    }

    getTopic(selectedCategoryId, {
      page: topicPages,
      size: 5,
      query: debouncedTopic,
      filter: 'NONE',
    })
      .then((res) => {
        setIsDropTopics(true)
        setTopicList(res.content)
        setTopicTotalPages(res.totalPages)
      })
      .catch((err) => {
        console.log(err)

        const data = err as TierlistErrorType
        if (data.errorCode === 'NF-002') {
          alert(data.message)
        }
      })
  }, [debouncedTopic, topicPages, selectedCategoryId])

  const onChangeCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value)
  }

  const onChangeTopic = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedCategoryId === 0) {
      alert('카테고리를 선택해주세요.')
    } else setTopic(event.target.value)
  }

  const onClickCreateCategory = useCallback(() => {
    if (category === debouncedCategory) {
      createCategory(category)
        .then(() => {
          // const selected = res.headers['category-id']
          // setSelectedCategoryId(selected)
          setIsDropCategories(false)
        })
        .catch((err) => {
          const data = err.response.data as TierlistErrorType

          if (data.errorCode === 'D-004') {
            alert('이미 존재하는 카테고리입니다.')
          } else if (data.errorCode === 'IR-004') {
            alert(
              '카테고리 이름은 2자 이상 20자 이하, 영어, 숫자 한글 또는 스페이스로 구성되어야 하고,특수문자, 자음, 모음을 포함할 수 없습니다.',
            )
          }
        })
    }
  }, [category, debouncedCategory])

  const onClickCreateTopic = useCallback(() => {
    if (topic === debouncedTopic) {
      createTopic(topic, selectedCategoryId)
        .then(() => {
          // setSelectedTopicId(res.headers['topic-id'])
          setIsDropTopics(false)
        })
        .catch((err) => {
          const data = err.response.data as TierlistErrorType

          if (data.errorCode === 'D-005') {
            alert('카테고리 내에서 이미 존재하는 토픽입니다.')
          }
        })
    }
  }, [topic, debouncedTopic, selectedCategoryId])

  const onClickCategory = useCallback((categoryId: number, name: string) => {
    setSelectedCategoryId(categoryId)
    setCategory(name)
    setTopic('')
    setIsDropCategories(false)
    setIsSelectCategory(true)
  }, [])

  const onClickTopic = useCallback((topicId: number, name: string) => {
    setSelectedTopicId(topicId)
    setTopic(name)
    setIsSelectTopic(true)
    setIsDropTopics(false)
  }, [])

  const onClickCategoryPage = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      event.stopPropagation()
      setCategoryPages(value)
    },
    [],
  )

  const onClickTopicPage = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      event.stopPropagation()
      setTopicPages(value)
    },
    [],
  )

  const onClickTierlistCreate = useCallback(
    (closeModal: () => void) => {
      console.log(selectedCategoryId, selectedTopicId, titleRef.current?.value)

      if (titleRef.current?.value) {
        createTierlist(selectedTopicId, titleRef.current.value)
          .then(() => {
            navigate('tierlist-modify/1')
            closeModal()
          })
          .catch((err) => {
            const data = err.response.data as TierlistErrorType

            if (data.errorCode === 'NF-002') {
              alert(data.message)
            } else if (data.errorCode === 'IR-004') {
              alert(
                '티어리스트 제목은 2자 이상 25자 이하, 영어, 숫자 한글 또는 스페이스로 구성되어야 하고 특수문자, 자음, 모음을 포함할 수 없습니다.',
              )
            }
          })
      }
    },
    [selectedCategoryId, selectedTopicId, titleRef.current],
  )

  return {
    navigate,
    category,
    topic,
    categoryList,
    topicList,
    isDropCategories,
    isDropTopics,
    categoryTotalPages,
    topicTotalPages,
    titleRef,
    onChangeCategory,
    onChangeTopic,
    onClickCategory,
    onClickTopic,
    setIsDropCategories,
    onClickCreateCategory,
    onClickCategoryPage,
    onClickTopicPage,
    onClickTierlistCreate,
    onClickCreateTopic,
  }
}

export default useCreateModal
