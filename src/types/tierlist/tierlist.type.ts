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
