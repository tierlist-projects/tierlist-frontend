import { atom } from 'recoil'
import { UserInformationType } from 'types/user/user.type'

export const accessTokenState = atom<string | null>({
  key: 'accessToken',
  default: null,
})

export const userState = atom<UserInformationType | null>({
  key: 'user',
  default: null,
})
