import useAxiosInterceptor from '@hooks/useAxiosInterceptor'
import React from 'react'

const PrivateRoute = (Component: React.ComponentType) => {
  const Auth = () => {
    useAxiosInterceptor()
    return <Component />
  }
  return Auth
}

export default PrivateRoute
