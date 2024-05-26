import { authHttp, http } from '@utils/http'
import { PaginationType } from 'types/common/pagination.type'
import {
  ResponseCategoryType,
  ResponseCreateCategoryType,
  ResponseCreateTierlistType,
  ResponseCreateTopicType,
  ResponseTopicType,
} from 'types/tierlist/category.type'

export async function createCategory(name: string) {
  return authHttp.post<ResponseCreateCategoryType>('category', { name })
}

export async function getCategory(pagination: PaginationType) {
  return http.get<ResponseCategoryType>(
    `category?page=${pagination.page}&size=${pagination.size}&query=${pagination.query}&filter=${pagination.filter}`,
  )
}

export async function createTopic(name: string, categoryId: number) {
  return authHttp.post<ResponseCreateTopicType>(`topic`, {
    categoryId,
    name,
  })
}

export async function getTopic(categoryId: number, pagination: PaginationType) {
  return authHttp.get<ResponseTopicType>(
    `category/${categoryId}/topic?page=${pagination.page}&size=${pagination.size}&query=${pagination.query}&filter=${pagination.filter}`,
  )
}

export async function createTierlist(topicId: number, title: string) {
  return authHttp.post<ResponseCreateTierlistType>(`tierlist`, {
    topicId,
    title,
  })
}
