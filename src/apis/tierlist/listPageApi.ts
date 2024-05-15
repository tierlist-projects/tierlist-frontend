/* eslint-disable no-else-return */
import { authHttp, http } from '@utils/http'
import { CategoryType, TopicType } from 'types/tierlist/category.type'
import { ResponsePostType } from 'types/tierlist/tierlist.type'

export async function getTierlist(url: string) {
  return http.get<ResponsePostType>(url)
}

export async function toggleFavorite(type: string, id: number) {
  return authHttp.patch(`${type}/${id}/favorite/toggle`)
}

export async function getSingleCategory(categoryId: number, auth: boolean) {
  if (auth) return authHttp.get<CategoryType>(`category/${categoryId}`)
  else return http.get<CategoryType>(`category/${categoryId}`)
}

export async function getSingleTopic(topicId: number, auth: boolean) {
  if (auth) return authHttp.get<TopicType>(`topic/${topicId}`)
  else return http.get<TopicType>(`topic/${topicId}`)
}
