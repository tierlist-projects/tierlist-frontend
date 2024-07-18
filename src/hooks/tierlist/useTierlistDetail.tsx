import { getTierlistDetail, toggleLike } from '@apis/tierlist/tierlistDetailApi'
import { userState } from '@atom/userAtom'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { TierlistErrorType } from 'types/tierlist/category.type'
import { PostDetailType } from 'types/tierlist/tierlist.type'

const useTierlistDetail = () => {
  const navigate = useNavigate()
  const tierlistId = Number(useParams().id)
  const user = useRecoilValue(userState)
  const [postDetail, setPostDetail] = useState<PostDetailType | null>(null)

  const getPostDetail = useCallback(() => {
    getTierlistDetail(tierlistId)
      .then((res) => {
        console.log(res)

        setPostDetail(res)
      })
      .catch((err) => {
        const data = err.response.data as TierlistErrorType
        alert(data.message)
      })
  }, [tierlistId, postDetail])

  const onClickLikeButton = useCallback(() => {
    toggleLike(tierlistId)
      .then(() => {
        getPostDetail()
      })
      .catch((err) => {
        const data = err.response.data as TierlistErrorType

        alert(data.message)
      })
  }, [tierlistId])

  useEffect(() => {
    if (!tierlistId || !user) return

    getPostDetail()
  }, [tierlistId, user])

  return { navigate, postDetail, onClickLikeButton }
}

export default useTierlistDetail
