import React from 'react'
import Main from './Main'
import { AuthProvider, MerchantProvider } from '../contexts'

const RouteApp = () => {
  return (
    <AuthProvider>
      <MerchantProvider>
        <Main />
      </MerchantProvider>
    </AuthProvider>
  )
}

export default RouteApp
