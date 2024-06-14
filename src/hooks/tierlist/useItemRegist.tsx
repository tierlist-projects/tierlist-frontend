/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-useless-return */
import { uploadImage } from '@apis/common/imageApi'
import {
  createItem,
  getItemsInCategory,
} from '@apis/tierlist/tierlistModifyPageApi'
import useDetectCloseInModal from '@hooks/common/useDetectCloseInModal'
import useDebounce from '@hooks/useDebounce'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { TierlistErrorType } from 'types/tierlist/category.type'
import {
  ItemType,
  RankType,
  SearchedItemType,
} from 'types/tierlist/tierlist.type'

type Props = {
  categoryId: number
}

const useItemRegist = ({ categoryId }: Props) => {
  // 아이템
  const [itemName, setItemName] = useState('')
  const listRef = useRef<HTMLDivElement>(null)
  const [isDropItems, setIsDropItems] = useDetectCloseInModal(listRef, false)
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
    createItem(categoryId, debouncedItemName)
      .then((res) => {
        setSelectedItem(res.itemId)
        setIsDropItems(false)
      })
      .catch((err) => {
        const data = err.response.data as TierlistErrorType

        if (data) {
          if (data.errorCode === 'IR-004') {
            alert(
              '아이템 이름은 2자 이상 10자 이하, 영어, 숫자 한글 또는 스페이스로 구성되어야 하고,특수문자, 자음, 모음을 포함할 수 없습니다.',
            )
          } else alert(data.message)
        }
      })
  }, [debouncedItemName])

  useEffect(() => {
    if (!isDropItems) return
    if (selectItem) {
      setSelectItem(false)
      return
    }

    getItemsInCategory(categoryId, {
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

  const checkItemDuplicate = useCallback((id: number, ranks: RankType) => {
    const rankList = Object.entries(ranks)

    for (let i = 0; i < rankList.length; i += 1) {
      const rank = rankList[i][1]

      for (let j = 0; j < rank.length; j += 1) {
        if (rank[j].id === id) return false
      }
    }

    return true
  }, [])

  const registItem = useCallback(
    async (ranks: RankType) => {
      if (!debouncedItemName) return null
      // 아이템 중복 확인
      if (!checkItemDuplicate(selectedItem, ranks)) {
        alert('중복된 아이템입니다.')
        return
      }

      let itemRankImage = ''

      if (itemImage) {
        const formData = new FormData()
        formData.append('image', itemImage)

        try {
          const res = await uploadImage(formData)
          ;[itemRankImage] = res.imageNames
        } catch (err: any) {
          const data = err.response.data as TierlistErrorType
          console.log(err)

          alert(data.message)
          return null
        }
      }

      return {
        id: selectedItem,
        name: itemName,
        itemRankImage,
        orderIdx: 0,
        rank: 'NONE',
      } as ItemType
    },
    [itemImage, debouncedItemName, selectedItem],
  )

  return {
    itemName,
    isDropItems,
    searchedItemList,
    itemTotalPages,
    listRef,
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
