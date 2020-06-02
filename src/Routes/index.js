import React from 'react'
import Main from './Main'
import { AuthProvider, MerchantProvider, CartProvider } from '../contexts'

const RouteApp = () => {
  return (
    <AuthProvider>
      <MerchantProvider>
        <CartProvider>
          <Main />
        </CartProvider>
      </MerchantProvider>
    </AuthProvider>
  )
}

export default RouteApp
