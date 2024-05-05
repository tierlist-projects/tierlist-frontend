export type FILTER = 'HOT' | 'NONE' | 'RECENT'

export type PaginationType = {
  page: number
  size: number
  query?: string
  filter: FILTER
}
