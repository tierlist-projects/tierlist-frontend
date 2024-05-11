import { authHttp } from '@utils/http'
import { ImageNamesType } from 'types/common/image.type'

export function uploadImage(formData: FormData) {
  return authHttp.post<ImageNamesType>(`image`, formData, {
    'Content-Type': 'multipart/form-data',
  })
}
