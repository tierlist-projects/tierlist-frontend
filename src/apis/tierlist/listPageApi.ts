import { http } from '@utils/http'
import { ResponsePostType } from 'types/tierlist/tierlist.type'

export async function getTierlist(url: string) {
  return http.get<ResponsePostType>(url)
}
