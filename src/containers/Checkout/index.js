import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useMerchant, useCart } from '../../contexts'
import Map from './../../components/GoogleMap'

const Checkout = ({ location }) => {
  const id = new URLSearchParams(location.search).get('id')
  const { merchants, fetchMerchantById } = useMerchant()

  return (
    <div class="w-full max-w-screen-xl mx-auto px-6">
      Checkout
      <Map></Map>
    </div>
  )
}

export default Checkout
