/* eslint-disable no-else-return */
import { SERVER_BASE_URL } from '@constants/baseUrl'
import AxiosS, { AxiosRequestConfig } from 'axios'
import { ResponseTokenType } from 'types/auth.type'
import { getCookie, removeCookie, setCookie } from './cookie'

const axios = AxiosS.create()
export const authAxios = AxiosS.create()
axios.defaults.baseURL = SERVER_BASE_URL
axios.defaults.withCredentials = true
authAxios.defaults.baseURL = SERVER_BASE_URL
authAxios.defaults.withCredentials = true

let isReissue = false
let refreshSubscribers: ((token: string) => void)[] = []

export const http = {
  get: async function get<Response = unknown>(
    url: string,
    header?: AxiosRequestConfig['headers'],
  ) {
    const options: AxiosRequestConfig = {
      headers: header,
    }

    const res = await axios.get<Response>(url, options)
    return res.data
  },

  post: async function post<Response = unknown, Request = unknown>(
    url: string,
    body?: Request,
    header?: AxiosRequestConfig['headers'],
  ) {
    const options: AxiosRequestConfig = {
      headers: header,
    }

    const res = await axios.post<Response>(url, body, options)
    return res.data
  },
}

function onRefreshed(token: string) {
  refreshSubscribers.forEach((callback) => callback(token))
  refreshSubscribers = []
}

function addRefreshSubscriber(callback: (token: string) => void) {
  refreshSubscribers.push(callback)
}

authAxios.interceptors.response.use(
  (response) => {
    return response
  },

  async (error) => {
    const {
      config,
      response: { status },
    } = error

    if (status === 401) {
      const originRequest = config
      const refreshToken = getCookie('refresh-token')

      if (!isReissue) {
        isReissue = true
        try {
          const newToken = await http.post<ResponseTokenType>('reissue', null, {
            'Refresh-Token': refreshToken,
            'Content-Type': 'application/json',
          })

          if (newToken) {
            setCookie(
              'refresh-token',
              `${newToken.tokenType} ${newToken.refreshToken}`,
              {
                path: '/',
                maxAge: newToken.refreshTokenExpiresIn,
              },
            )

            isReissue = false
            onRefreshed(newToken.accessToken)

            authAxios.defaults.headers.common.Authorization = `Bearer ${newToken.accessToken}`
            originRequest.headers.Authorization = `Bearer ${newToken.accessToken}`
            return await authAxios(originRequest)
          }
        } catch (err) {
          console.log(err)

          removeCookie('refresh-token')
          removeCookie('isLogin')
          window.location.replace('/')
          return Promise.reject(error)
        }
      } else {
        return new Promise((resolve) => {
          addRefreshSubscriber(async (token: string) => {
            originRequest.headers = {
              ...originRequest.headers,
              Authorization: `Bearer ${token}`,
            }
            resolve(await authAxios(originRequest))
          })
        })
      }
    }
    return Promise.reject(error)
  },
)

export const authHttp = {
  get: async function get<Response = unknown>(
    url: string,
    header?: AxiosRequestConfig['headers'],
    params?: object,
  ) {
    const options: AxiosRequestConfig = {
      headers: header,
      params,
    }
    const res = await authAxios.get<Response>(url, options)
    return res.data
  },

  post: async function post<Response = unknown, Request = unknown>(
    url: string,
    body?: Request,
    header?: AxiosRequestConfig['headers'],
  ) {
    const options: AxiosRequestConfig = {
      headers: header,
    }

    const res = await authAxios.post<Response>(url, body, options)
    return res.data
  },

  put: async function put<Response = unknown, Request = unknown>(
    url: string,
    body?: Request,
    header?: AxiosRequestConfig['headers'],
  ) {
    const options: AxiosRequestConfig = {
      headers: header,
    }

    const res = await authAxios.put<Response>(url, body, options)
    return res.data
  },

  patch: async function patch<Response = unknown, Request = unknown>(
    url: string,
    body?: Request,
    header?: AxiosRequestConfig['headers'],
  ) {
    const options: AxiosRequestConfig = {
      headers: header,
    }

    const res = await authAxios.patch<Response>(url, body, options)
    return res.data
  },

  delete: async function axiosDelete<Response = unknown>(
    url: string,
    header?: AxiosRequestConfig['headers'],
  ) {
    const options: AxiosRequestConfig = {
      headers: header,
    }
    const res = await authAxios.delete<Response>(url, options)
    return res.data
  },
}
