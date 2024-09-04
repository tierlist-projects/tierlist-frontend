import { getNotableTierlist } from '@apis/main/mainApi'
import React, { useCallback, useEffect, useState } from 'react'
import { TierlistErrorType } from 'types/tierlist/category.type'
import { PostType } from 'types/tierlist/tierlist.type'

const useNotableTierlist = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [notableList, setNotableList] = useState<PostType[]>([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const onChangePage = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      if (value === undefined) return
      setPage(value)
      const listEl = document.querySelector('.notable-top')
      if (listEl) listEl.scrollTop = 0
    },
    [],
  )

  useEffect(() => {
    setIsLoading(true)
    getNotableTierlist(page - 1)
      .then((res) => {
        setNotableList(res.content)
        if (res.totalPages > 4) setTotalPages(4)
        else setTotalPages(res.pageSize)
        setIsLoading(false)
      })
      .catch((err) => {
        const data = err.response.data as TierlistErrorType
        alert(data.message)
      })
  }, [page])

  return { notableList, page, totalPages, isLoading, onChangePage }
}

export default useNotableTierlist
