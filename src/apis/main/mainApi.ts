import { authHttp, http } from '@utils/http'
import {
  ResponseCategoryType,
  ResponseTopicType,
} from 'types/tierlist/category.type'
import { ResponsePostType } from 'types/tierlist/tierlist.type'

export function getPopularCategories() {
  return http.get<ResponseCategoryType>(`category?page=0&size=10&filter=HOT`)
}

export function getNotableTierlist(page: number) {
  return http.get<ResponsePostType>(`tierlist?page=${page}&size=6&filter=HOT`)
}

export function getFavoriteCategory(page: number, size: number) {
  return authHttp.get<ResponseCategoryType>(
    `category/favorite?page=${page}&size=${size}`,
  )
}

export function getFavoriteTopic(page: number, size: number) {
  return authHttp.get<ResponseTopicType>(
    `topic/favorite?page=${page}&size=${size}`,
  )
}
