import React from 'react'
import Main from './Main'
import { AuthProvider } from '../services/firebase'

const RouteApp = () => {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  )
}

export default RouteApp
