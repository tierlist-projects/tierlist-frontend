import { getMyTierlist } from '@apis/mypage/mypageApi'
import { userState } from '@atom/userAtom'
import { useCallback, useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { TierlistErrorType } from 'types/tierlist/category.type'
import { PostType } from 'types/tierlist/tierlist.type'

const useMyTierlist = () => {
  const [myList, setMyList] = useState<PostType[]>([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const user = useRecoilValue(userState)
  const [isLoading, setIsLoading] = useState(false)

  const onClickPage = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value)
      document.querySelector('.my-tierlist')?.scrollIntoView()
    },
    [],
  )

  useEffect(() => {
    setIsLoading(true)
    getMyTierlist({
      page: page - 1,
      size: 12,
      query: '',
      filter: 'RECENT',
    })
      .then((res) => {
        setMyList(res.content)
        setTotalPages(res.totalPages)
        setIsLoading(false)
      })
      .catch((err) => {
        const data = err.response.data as TierlistErrorType

        alert(data.message)
      })
  }, [user, page])

  return { myList, totalPages, page, isLoading, onClickPage }
}

export default useMyTierlist
