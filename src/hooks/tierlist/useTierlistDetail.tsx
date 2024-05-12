import { getTierlistDetail, toggleLike } from '@apis/tierlist/tierlistDetailApi'
import { userState } from '@atom/userAtom'
import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { TierlistErrorType } from 'types/tierlist/category.type'
import { PostDetailType } from 'types/tierlist/tierlist.type'

const useTierlistDetail = () => {
  const tierlistId = Number(useParams().id)
  const user = useRecoilValue(userState)
  const [postDetail, setPostDetail] = useState<PostDetailType | null>(null)
  const [liked, setLiked] = useState(false)

  const onClickLikeButton = useCallback(() => {
    toggleLike(tierlistId)
      .then(() => {
        setLiked((prev) => !prev)
      })
      .catch((err) => {
        const data = err.response.data as TierlistErrorType

        alert(data.message)
      })
  }, [tierlistId, liked])

  useEffect(() => {
    if (!tierlistId || !user) return

    getTierlistDetail(tierlistId)
      .then((res) => {
        setPostDetail(res)
        setLiked(res.liked)
      })
      .catch((err) => {
        const data = err.response.data as TierlistErrorType
        alert(data.message)
      })
  }, [tierlistId, user, liked])

  return { postDetail, onClickLikeButton }
}

export default useTierlistDetail
