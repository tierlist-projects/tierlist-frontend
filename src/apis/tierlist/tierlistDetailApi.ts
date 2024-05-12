import { authHttp } from '@utils/http'
import {
  PostCommentType,
  ResponseCommentType,
} from 'types/tierlist/comment.type'
import { PostDetailType } from 'types/tierlist/tierlist.type'

export function getTierlistDetail(tierlistId: number) {
  return authHttp.get<PostDetailType>(`tierlist/${tierlistId}`)
}

export function toggleLike(tierlistId: number) {
  return authHttp.patch(`tierlist/${tierlistId}/like/toggle`)
}

export function getComments(tierlistId: number, page: number, size: number) {
  return authHttp.get<ResponseCommentType>(
    `tierlist/${tierlistId}/comment?page=${page}&size=${size}`,
  )
}

export function postComment(tierlistId: number, comment: PostCommentType) {
  return authHttp.post(`tierlist/${tierlistId}/comment`, comment)
}
