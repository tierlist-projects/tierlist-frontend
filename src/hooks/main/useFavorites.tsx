import { getFavoriteCategory, getFavoriteTopic } from '@apis/main/mainApi'
import { toggleFavorite } from '@apis/tierlist/listPageApi'
import { userState } from '@atom/userAtom'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import {
  CategoryType,
  TierlistErrorType,
  TopicType,
} from 'types/tierlist/category.type'

const useFavorites = () => {
  const navigate = useNavigate()
  const user = useRecoilValue(userState)
  const [favoriteCategories, setFavoriteCategories] = useState<CategoryType[]>(
    [],
  )
  const [favoriteTopics, setFavoriteTopics] = useState<TopicType[]>([])

  const getFavorites = useCallback(() => {
    getFavoriteCategory(0, 10)
      .then((res) => {
        setFavoriteCategories(res.content)
      })
      .catch((err) => {
        const data = err.response.data as TierlistErrorType
        alert(data)
      })

    getFavoriteTopic(0, 10)
      .then((res) => {
        setFavoriteTopics(res.content)
      })
      .catch((err) => {
        const data = err.response.data as TierlistErrorType
        alert(data)
      })
  }, [])

  const onClick = useCallback(
    (event: React.MouseEvent, type: string, id: number) => {
      event.stopPropagation()
      toggleFavorite(type, id)
        .then(() => {
          getFavorites()
        })
        .catch((err) => {
          const data = err.response.data as TierlistErrorType
          alert(data)
        })
    },
    [],
  )

  useEffect(() => {
    if (!user) return

    getFavorites()
  }, [user])

  return { navigate, favoriteCategories, favoriteTopics, onClick }
}

export default useFavorites
