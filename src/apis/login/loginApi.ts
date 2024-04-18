import { http } from '@utils/http'
import { ResponseTokenType } from 'types/auth.type'

type Props = {
  email: string
  password: string
}

export const loginApi = ({
  email,
  password,
}: Props): Promise<ResponseTokenType> => {
  return http.post(`login`, {
    email,
    password,
  })
}
