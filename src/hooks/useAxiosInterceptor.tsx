/* eslint-disable no-param-reassign */
import { accessTokenState } from '@atom/userAtom'
import { http, authAxios } from '@utils/http'
import {
  AxiosError,
  AxiosRequestHeaders,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'
import { useEffect } from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'
import { getCookie, removeCookie, setCookie } from '@utils/cookie'
import { ResponseTokenType } from 'types/auth.type'
// import useInitUser from './useInitUser'

const useAxiosInterceptor = () => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState)
  const resetAccessToken = useResetRecoilState(accessTokenState)
  //   const initUser = useInitUser()

  const errorHandler = (error: AxiosError) => {
    console.log('errInterceptor!', error)
    if (error.response?.status === 401) {
      removeCookie('refresh-token')
      resetAccessToken()
      window.location.href = '/'
    }
    return Promise.reject(error)
  }

  const requestHandler = async (config: InternalAxiosRequestConfig) => {
    if (accessToken) {
      config.headers = config.headers || {}
      ;(config.headers as AxiosRequestHeaders).Authorization = accessToken
        ? `Bearer ${accessToken}`
        : ''
    }

    // 엑세스토큰 없는 경우 리프레시 토큰으로 엑세스 토큰 재발급
    else {
      try {
        const refreshToken = getCookie('refresh-token')

        const newToken = await http.post<ResponseTokenType>('reissue', {
          'Refresh-Token': `Bearer ${refreshToken}`,
        })

        if (newToken) {
          config.headers = config.headers || {}
          ;(config.headers as AxiosRequestHeaders).Authorization =
            `Bearer ${newToken.accessToken}`

          setAccessToken(newToken.accessToken)
          setCookie(
            'refresh-token',
            `${newToken.tokenType} ${newToken.refreshToken}`,
            {
              path: '/',
              httpOnly: true,
            },
          )
          //   initUser()
        }
      } catch (error) {
        console.error('액세스 토큰 재발급 실패:', error)
        removeCookie('refresh-token')
        resetAccessToken()
        window.location.href = '/'
      }
    }
    return config
  }

  const responseHandler = <T,>(
    response: AxiosResponse<T>,
  ): AxiosResponse<T> => {
    return response
  }
  const requestInterceptor = authAxios.interceptors.request.use(requestHandler)

  const responseInterceptor = authAxios.interceptors.response.use(
    (response: AxiosResponse) => responseHandler(response),
    (error: AxiosError) => errorHandler(error),
  )

  useEffect(() => {
    return () => {
      authAxios.interceptors.request.eject(requestInterceptor)
      authAxios.interceptors.response.eject(responseInterceptor)
    }
  }, [responseInterceptor, requestInterceptor])
}

export default useAxiosInterceptor
