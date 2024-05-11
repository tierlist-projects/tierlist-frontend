/* eslint-disable no-useless-return */
import { uploadImage } from '@apis/common/imageApi'
import {
  createItem,
  getItemsInCategory,
} from '@apis/tierlist/tierlistModifyPageApi'
import useDebounce from '@hooks/useDebounce'
import React, { useCallback, useEffect, useState } from 'react'
import { TierlistErrorType } from 'types/tierlist/category.type'
import { ItemType, SearchedItemType } from 'types/tierlist/tierlist.type'

const useItemRegist = () => {
  // 아이템
  const [itemName, setItemName] = useState('')
  const [isDropItems, setIsDropItems] = useState(false)
  const [searchedItemList, setSearchedItemList] = useState<SearchedItemType[]>(
    [],
  )
  const [itemTotalPages, setItemTotalPages] = useState(0)
  const [itemPage, setItemPage] = useState(0)
  const [selectItem, setSelectItem] = useState(false)
  const [itemImage, setItemImage] = useState<File | null>(null)
  const [selectedItem, setSelectedItem] = useState(0)

  const debouncedItemName = useDebounce(itemName, 500)

  const onChangeItemName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setItemName(event.target.value)
    },
    [],
  )

  const onClickItemPage = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      event.stopPropagation()
      setItemPage(value - 1)
    },
    [],
  )

  const onClickItem = useCallback((name: string, id: number) => {
    setItemName(name)
    setSelectItem(true)
    setIsDropItems(false)
    setSelectedItem(id)
  }, [])

  const onClickCreateItem = useCallback(() => {
    createItem(1, debouncedItemName)
      .then(() => {
        setIsDropItems(false)
      })
      .catch((err) => {
        const data = err.response.data as TierlistErrorType

        if (data) {
          alert(data.message)
        }
      })
  }, [debouncedItemName])

  useEffect(() => {
    if (!isDropItems) return
    if (selectItem) {
      setSelectItem(false)
      return
    }

    getItemsInCategory(1, {
      page: itemPage,
      size: 5,
      query: debouncedItemName,
      filter: 'NONE',
    })
      .then((res) => {
        setSearchedItemList(res.content)
        setItemTotalPages(res.totalPages)
      })
      .catch((err) => {
        const data = err.response.data as TierlistErrorType
        alert(data.message)
      })
  }, [isDropItems, debouncedItemName])

  const registItem = useCallback(async () => {
    if (!debouncedItemName) return null

    let itemRankImage = ''

    if (itemImage) {
      const formData = new FormData()
      formData.append('image', itemImage)

      await uploadImage(formData)
        .then((res) => {
          ;[itemRankImage] = res.imageNames
        })
        .catch((err) => {
          const data = err.response.data as TierlistErrorType
          console.log(err)

          alert(data.message)
          return null
        })
    }

    return {
      id: selectedItem,
      name: itemName,
      itemRankImage,
      orderIdx: 0,
      rank: 'NONE',
    } as ItemType
  }, [itemImage, debouncedItemName])

  return {
    itemName,
    isDropItems,
    searchedItemList,
    itemTotalPages,
    onChangeItemName,
    onClickItemPage,
    onClickItem,
    onClickCreateItem,
    setIsDropItems,
    setItemImage,
    registItem,
  }
}

export default useItemRegist
