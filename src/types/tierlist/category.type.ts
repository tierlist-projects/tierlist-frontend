export type CategoryType = {
  id: number
  name: string
  isFavorite: boolean
}

export type TopicType = {
  id: number
  name: string
  isFavorite: boolean
  category: CategoryType
}

export type TierlistErrorType = {
  errorCode: string
  message: string
}

export type ResponseCreateCategory = {
  headers: {
    'category-id': number
  }
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
