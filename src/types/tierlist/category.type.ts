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

export type CategoryErrorType = {
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
