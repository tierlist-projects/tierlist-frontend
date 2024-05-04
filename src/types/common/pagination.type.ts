export type FILTER = 'HOT' | 'NONE' | 'RECENT'

export type PaginationType = {
  pageCount: number
  pageSize: number
  query?: string
  filter: FILTER
}
