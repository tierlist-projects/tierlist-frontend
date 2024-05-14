import { getNotableTierlist } from '@apis/main/mainApi'
import React, { useCallback, useEffect, useState } from 'react'
import { TierlistErrorType } from 'types/tierlist/category.type'
import { PostType } from 'types/tierlist/tierlist.type'

const useNotableTierlist = () => {
  const [notableList, setNotableList] = useState<PostType[]>([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const onChangePage = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      if (value === undefined) return
      setPage(value)
    },
    [],
  )

  useEffect(() => {
    getNotableTierlist(page - 1)
      .then((res) => {
        setNotableList(res.content)
        if (res.totalPages < 4) setTotalPages(res.totalPages)
      })
      .catch((err) => {
        const data = err.response.data as TierlistErrorType
        alert(data.message)
      })
  }, [page])

  return { notableList, page, totalPages, onChangePage }
}

export default useNotableTierlist
