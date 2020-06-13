import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useMerchant, useCart, CartContext } from '../../contexts'
import Map from './../../components/GoogleMap'
import CheckoutList from './../../components/CheckoutList'
import Distance from './../../components/GoogleMap/GetDistance'

const Checkout = ({ location }) => {
  const id = new URLSearchParams(location.search).get('id')
  const { merchants, fetchMerchantById } = useMerchant()
  const cart = useContext(CartContext)


  return (
    <div class="w-full max-w-screen-xl mx-auto px-6">
      <section class="text-gray-700 body-font text-center">
        <div class="container px-5 py-10 mx-auto">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 font-medium">
            Checkout
          </h1>
        </div>
      </section>
      <p class="mx-auto leading-relaxed text-xl text-left mb-5 text-center">Restaurant's Location</p>
      <section class="text-gray-700 body-font">
        <div class="container px-5 py-10 mx-auto">
          {console.log('merchant : ' + cart.merchant)}
          <CheckoutList></CheckoutList>
        </div>
      </section>
      <Map></Map>
      <Distance />
    </div>
  )
}

export default Checkout
