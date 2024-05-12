import { getTopic } from '@apis/tierlist/createModalApi'
import useDebounce from '@hooks/useDebounce'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { TierlistErrorType, TopicType } from 'types/tierlist/category.type'

const useTopicSideBar = () => {
  const navigate = useNavigate()
  const categoryId = Number(useParams().categoryId)
  const [keyword, setKeyword] = useState('')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [topicList, setTopicList] = useState<TopicType[]>([])

  const debouncedKeyword = useDebounce(keyword, 500)

  const onChangeKeyword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setKeyword(e.target.value)
    },
    [],
  )

  const onClickPage = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      if (value === undefined) return
      setPage(value)
    },
    [],
  )

  const onClickTopic = useCallback(
    (topicId: number) => {
      navigate(`/tierlist/${categoryId}/${topicId}`)
    },
    [categoryId],
  )

  useEffect(() => {
    getTopic(categoryId, {
      page: page - 1,
      size: 20,
      query: debouncedKeyword,
      filter: 'NONE',
    })
      .then((res) => {
        setTopicList(res.content)
        setTotalPages(res.totalPages)
      })
      .catch((err) => {
        const data = err.response.data as TierlistErrorType

        alert(data.message)
      })
  }, [categoryId, debouncedKeyword])

  return {
    navigate,
    page,
    topicList,
    totalPages,
    onChangeKeyword,
    onClickPage,
    onClickTopic,
  }
}

export default useTopicSideBar
