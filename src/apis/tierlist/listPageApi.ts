import { authHttp, http } from '@utils/http'
import { ResponsePostType } from 'types/tierlist/tierlist.type'

export async function getTierlist(url: string) {
  return http.get<ResponsePostType>(url)
}

export async function toggleFavorite(type: string, id: number) {
  return authHttp.patch(`${type}/${id}/favorite/toggle`)
}
