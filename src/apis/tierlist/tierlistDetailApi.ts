import { authHttp } from '@utils/http'
import { PostDetailType } from 'types/tierlist/tierlist.type'

export function getTierlistDetail(tierlistId: number) {
  return authHttp.get<PostDetailType>(`tierlist/${tierlistId}`)
}

export function toggleLike(tierlistId: number) {
  return authHttp.patch(`tierlist/${tierlistId}/like/toggle`)
}
