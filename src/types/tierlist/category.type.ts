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
