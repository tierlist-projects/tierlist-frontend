import React, { useCallback, useEffect, useRef, useState } from 'react'
import { CategoryType } from 'types/tierlist/category.type'
import { getCategory } from '@apis/tierlist/createModalApi'
import { useNavigate } from 'react-router-dom'
import useDebounce from './useDebounce'

const useSearchBar = () => {
  const navigate = useNavigate()
  const dropRef = useRef<HTMLDivElement>(null)
  const [isDrop, setIsDrop] = useState(false)
  const [keyword, setKeyword] = useState('')
  const [categoryList, setCategoryList] = useState<CategoryType[]>([])
  const [totalPages, setTotalPages] = useState(0)
  const [categoryPages, setCategoryPages] = useState(1)

  const debouncedKeyword = useDebounce(keyword, 500)

  // 검색창, 드롭다운을 클릭하면 드롭다운 닫히게 함
  useEffect(() => {
    const outSideClick = (event: MouseEvent) => {
      if (
        dropRef.current !== null &&
        !dropRef.current.contains(event.target as Node)
      ) {
        setIsDrop(false)
      }
    }

    if (isDrop) {
      document.addEventListener('click', outSideClick)
    }

    return () => {
      document.removeEventListener('click', outSideClick)
    }
  }, [isDrop, setIsDrop, dropRef])

  useEffect(() => {
    getCategory({
      page: categoryPages - 1,
      size: 3,
      query: debouncedKeyword,
      filter: 'NONE',
    }).then((res) => {
      setCategoryList(res.content)
      setTotalPages(res.totalPages)
    })
  }, [debouncedKeyword])

  const onChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value)
  }

  const onClickCategoryPage = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      event.stopPropagation()
      setCategoryPages(value)
    },
    [],
  )

  const onClickCategory = useCallback((categoryId: number) => {
    console.log(categoryId)
    setIsDrop(false)
    navigate(`/tierlist/${categoryId}`)
  }, [])

  return {
    dropRef,
    categoryList,
    totalPages,
    isDrop,
    setIsDrop,
    onChangeKeyword,
    onClickCategoryPage,
    onClickCategory,
  }
}

export default useSearchBar
