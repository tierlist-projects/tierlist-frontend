import { authHttp } from '@utils/http'
import { PaginationType } from 'types/common/pagination.type'
import { ResponsePostType } from 'types/tierlist/tierlist.type'

export function getMyTierlist(pagination: PaginationType) {
  return authHttp.get<ResponsePostType>(
    `me/tierlist?kpage=${pagination.page}&size=${pagination.size}&query=${pagination.query}&filter=${pagination.filter}`,
  )
}
