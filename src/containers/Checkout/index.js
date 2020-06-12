import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useMerchant, useCart, CartContext } from '../../contexts'
import Map from './../../components/GoogleMap'
import CheckoutList from './../../components/CheckoutList'

const Checkout = ({ location }) => {
  const id = new URLSearchParams(location.search).get('id')

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
      <Map></Map>
      <section class="text-gray-700 body-font">
        <div class="container px-5 py-10 mx-auto">
          <CheckoutList></CheckoutList>
        </div>
      </section>
    </div>
  )
}

export default Checkout
