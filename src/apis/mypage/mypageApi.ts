import { authHttp } from '@utils/http'
import { PaginationType } from 'types/common/pagination.type'
import { ResponsePostType } from 'types/tierlist/tierlist.type'

export function getMyTierlist(pagination: PaginationType) {
  return authHttp.get<ResponsePostType>(
    `me/tierlist?kpage=${pagination.page}&size=${pagination.size}&query=${pagination.query}&filter=${pagination.filter}`,
  )
}

export function changeProfileImage(profileImageName: string) {
  return authHttp.patch(`member/me/profile-image`, { profileImageName })
}

export function changeNickname(nickname: string) {
  return authHttp.patch(`member/me/nickname`, { nickname })
}

export function changePassword(password: string, newPassword: string) {
  return authHttp.patch(`member/me/password`, { password, newPassword })
}

export function togglePublic(tierlistId: number) {
  return authHttp.patch(`tierlist/${tierlistId}/publish/toggle`)
}
