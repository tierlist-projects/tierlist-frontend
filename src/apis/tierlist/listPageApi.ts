import { http } from '@utils/http'
import { PostType } from 'types/tierlist/tierlist.type'

export async function getTierlist(url: string) {
  return http.get<PostType[]>(url)
}
