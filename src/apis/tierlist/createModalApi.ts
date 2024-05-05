import { authHttp } from '@utils/http'
import { PaginationType } from 'types/common/pagination.type'
import {
  ResponseCategoryType,
  ResponseTopicType,
} from 'types/tierlist/category.type'

export async function createCategory(name: string) {
  return authHttp.post('category', { name })
}

export async function getCategory(pagination: PaginationType) {
  return authHttp.get<ResponseCategoryType>(
    `category?page=${pagination.page}&size=${pagination.size}&query=${pagination.query}&filter=${pagination.filter}`,
  )
}

export async function createTopic(name: string, categoryId: number) {
  return authHttp.post(`topic`, {
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
  return authHttp.post(`tierlist`, {
    topicId,
    title,
  })
}
