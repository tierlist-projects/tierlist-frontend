export type CategoryType = {
  id: number
  name: string
  isFavorite: boolean
  favoriteCount: number
}

export type TopicType = {
  id: number
  name: string
  isFavorite: boolean
  favoriteCount: number
  category: CategoryType
}

export type TierlistErrorType = {
  errorCode: string
  message: string
}

export type ResponseCategoryType = {
  content: CategoryType[]
  numberOfElements: number
  pageNumber: number
  pageSize: number
  totalElements: number
  totalPages: number
}

export type ResponseTopicType = {
  content: TopicType[]
  numberOfElements: number
  pageNumber: number
  pageSize: number
  totalElements: number
  totalPages: number
}

export type ResponseCreateCategoryType = {
  categoryId: number
}

export type ResponseCreateTopicType = {
  topicId: number
}

export type ResponseCreateTierlistType = {
  tierlistId: number
}
