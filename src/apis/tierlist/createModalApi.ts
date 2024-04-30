import { authHttp } from '@utils/http'

export async function createCategory(name: string) {
  return authHttp.post('/category', { name })
}
