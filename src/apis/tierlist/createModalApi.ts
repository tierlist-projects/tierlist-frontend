import { authHttp } from '@utils/http'
import { PaginationType } from 'types/common/pagination.type'
import {
  CategoryErrorType,
  ResponseCategoryType,
} from 'types/tierlist/category.type'

export async function createCategory(name: string): Promise<CategoryErrorType> {
  return authHttp.post('category', { name })
}

export async function getCategory(pagination: PaginationType) {
  return authHttp.get<ResponseCategoryType>(
    `category?pageCount=${pagination.pageCount}&pageSize=${pagination.pageSize}&query=${pagination.query}&filter=${pagination.filter}`,
  )
}
