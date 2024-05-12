import { TopicType } from './category.type'

export type RANK = 'S' | 'A' | 'B' | 'C' | 'D' | 'F' | 'NONE'

export type RANKSTR =
  | 'sranks'
  | 'aranks'
  | 'branks'
  | 'cranks'
  | 'dranks'
  | 'franks'

export type ItemType = {
  id: number
  name: string
  itemRankImage: string
  orderIdx: number
  rank: RANK
}

export type SearchedItemType = {
  id: number
  name: string
}

export type RankType = {
  noneRanks: ItemType[]
  sranks: ItemType[]
  aranks: ItemType[]
  branks: ItemType[]
  cranks: ItemType[]
  dranks: ItemType[]
  franks: ItemType[]
}

export type PutItemType = {
  itemId: number
  itemRankImage: string
}

export type PutTierlistType = {
  title: string
  content: string
  noneRanks: PutItemType[]
  sranks: PutItemType[]
  aranks: PutItemType[]
  branks: PutItemType[]
  cranks: PutItemType[]
  dranks: PutItemType[]
  franks: PutItemType[]
}

export type PostTopicType = {
  id: number
  name: string
  category: {
    id: number
    name: string
  }
}

export type WriterType = {
  id: number
  nickname: string
  profileImage: string
}

export type PostType = {
  id: number
  title: string
  topic: PostTopicType
  createAt: string
  likesCount: number
  commentsCount: number
  viewCount: number
  writer: WriterType
}

export type ResponsePostType = {
  pageSize: number
  totalPages: number
  pageNumber: number
  totalElements: number
  numberOfElements: number
  content: PostType[]
}

export type PostDetailType = {
  id: number
  title: string
  content: string
  createdAt: string
  ranks: RankType
  liked: boolean
  likesCount: number
  myTierlist: boolean
  commentsCount: number
  published: boolean
  writer: WriterType
  topic: TopicType
}

export type ResponseSearchItems = {
  pageSize: number
  totalPages: number
  pageNumber: number
  totalElements: number
  numberOfElements: number
  content: ItemType[]
}
