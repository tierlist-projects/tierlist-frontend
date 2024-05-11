import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  getModifyingTierlist,
  modifyTierlist,
} from '@apis/tierlist/tierlistModifyPageApi'
import { TierlistErrorType } from 'types/tierlist/category.type'
import {
  PostDetailType,
  PutItemType,
  RANKSTR,
  RankType,
} from 'types/tierlist/tierlist.type'
import { useRecoilValue } from 'recoil'
import { userState } from '@atom/userAtom'

const useModify = () => {
  const navigate = useNavigate()
  const tierlistId = Number(useParams().id)
  const user = useRecoilValue(userState)

  const [postDetail, setPostDetail] = useState<PostDetailType>()
  const [ranks, setRanks] = useState<RankType>({
    noneRanks: [],
    sranks: [],
    aranks: [],
    branks: [],
    cranks: [],
    dranks: [],
    franks: [],
  })
  const [thumbnail, setThumbnail] = useState<File | null>(null)

  const contentRef = useRef<HTMLTextAreaElement>(null)
  const titleRef = useRef<HTMLInputElement>(null)

  const savePost = useCallback(() => {
    if (!titleRef.current || !contentRef.current) return null
    const newRanks = {
      noneRanks: [] as PutItemType[],
      sranks: [] as PutItemType[],
      aranks: [] as PutItemType[],
      branks: [] as PutItemType[],
      cranks: [] as PutItemType[],
      dranks: [] as PutItemType[],
      franks: [] as PutItemType[],
    }

    Object.entries(ranks).map(([str, list]) => {
      const rank = str as RANKSTR

      return list.map((item) =>
        newRanks[rank].push({
          itemId: item.id,
          itemRankImage: item.itemRankImage,
        }),
      )
    })

    const modifiedDetail = {
      title: titleRef.current.value,
      content: contentRef.current.value,
      noneRanks: newRanks.noneRanks,
      sranks: newRanks.sranks,
      aranks: newRanks.aranks,
      branks: newRanks.branks,
      cranks: newRanks.cranks,
      dranks: newRanks.dranks,
      franks: newRanks.franks,
    }

    modifyTierlist(tierlistId, modifiedDetail)
      .then(() => {
        navigate(`/tierlist-detail/${tierlistId}`)
      })
      .catch((err) => {
        const data = err.response.data as TierlistErrorType

        alert(data.message)
      })
  }, [ranks, thumbnail, contentRef.current, titleRef.current])

  useEffect(() => {
    if (!user) return
    if (tierlistId) {
      getModifyingTierlist(tierlistId)
        .then((res) => {
          console.log(res)

          setPostDetail(res)
          setRanks(res.ranks)
        })
        .catch((err) => {
          const data = err.response.data as TierlistErrorType

          if (data) {
            alert(data.message)
          }
        })
    }
  }, [user])

  return {
    navigate,
    postDetail,
    ranks,
    contentRef,
    titleRef,
    setRanks,
    setThumbnail,
    savePost,
  }
}

export default useModify
