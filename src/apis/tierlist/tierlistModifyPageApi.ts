import { authHttp } from '@utils/http'
import { PaginationType } from 'types/common/pagination.type'
import {
  PostDetailType,
  PutTierlistType,
  ResponseCreateItemType,
  ResponseSearchItems,
} from 'types/tierlist/tierlist.type'

export function getModifyingTierlist(tierlistId: number) {
  return authHttp.get<PostDetailType>(`tierlist/${tierlistId}`)
}

export function getItemsInCategory(
  categoryId: number,
  pagination: PaginationType,
) {
  return authHttp.get<ResponseSearchItems>(
    `category/${categoryId}/item?page=${pagination.page}&size=${pagination.size}&query=${pagination.query}`,
  )
}

export function createItem(categoryId: number, name: string) {
  return authHttp.post<ResponseCreateItemType>(`item`, { categoryId, name })
}

export function modifyTierlist(
  tierlistId: number,
  modifiedDetail: PutTierlistType,
) {
  return authHttp.put(`tierlist/${tierlistId}`, modifiedDetail)
}
