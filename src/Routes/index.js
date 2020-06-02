import React from 'react'
import Main from './Main'
import { AuthProvider } from '../contexts'

const RouteApp = () => {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  )
}

export default RouteApp
