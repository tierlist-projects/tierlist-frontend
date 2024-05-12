import { WriterType } from './tierlist.type'

export type CommentType = {
  id: number
  content: string
  writer: WriterType
  createdAt: string
  myComment: boolean
  parentComment: boolean
  tierlistWriter: boolean
}

export type ResponseCommentType = {
  pageSize: number
  totalPages: number
  pageNumber: number
  totalElements: number
  numberOfElements: number
  content: CommentType[]
}

export type PostCommentType = {
  content: string
  parentCommentId: number | null
}
