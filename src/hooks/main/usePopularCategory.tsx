import { getPopularCategories } from '@apis/main/mainApi'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CategoryType, TierlistErrorType } from 'types/tierlist/category.type'

const usePopularCategory = () => {
  const navigate = useNavigate()
  const [popularCategoryList, setPopularCategoryList] = useState<
    CategoryType[]
  >([])
  useEffect(() => {
    getPopularCategories()
      .then((res) => {
        setPopularCategoryList(res.content)
      })
      .catch((err) => {
        const data = err.response.data as TierlistErrorType
        alert(data)
      })
  }, [])
  return { navigate, popularCategoryList }
}

export default usePopularCategory
