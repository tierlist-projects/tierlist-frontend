import { http } from '@utils/http'
import { ResponseCategoryType } from 'types/tierlist/category.type'
import { ResponsePostType } from 'types/tierlist/tierlist.type'

export function getPopularCategories() {
  return http.get<ResponseCategoryType>(`category?page=0&size=10&filter=HOT`)
}

export function getNotableTierlist(page: number) {
  return http.get<ResponsePostType>(`tierlist?page=${page}&size=6&filter=HOT`)
}
