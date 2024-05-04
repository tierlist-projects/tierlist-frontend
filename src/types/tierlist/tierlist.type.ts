export type ItemType = {
  itemId: number
  itemRankImage: string
}

export type ResponseTierListType = {
  title: string
  content: string
  noneRanks: ItemType[]
  sranks: ItemType[]
  aranks: ItemType[]
  branks: ItemType[]
  cranks: ItemType[]
  dranks: ItemType[]
  franks: ItemType[]
}

export type TopicType = {
  id: number
  name: string
}

export type WriterType = {
  id: number
  nickname: string
  profileImage: string
}

export type PostType = {
  id: number
  title: string
  topic: TopicType
  createAt: string
  likesCount: number
  commentsCount: number
  viewCount: number
  writer: WriterType
}
