export type FILTER = 'HOT' | 'NONE'

export type PaginationType = {
  pageCount: number
  pageSize: number
  query?: string
  filter: FILTER
}
