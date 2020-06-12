import React from 'react'
import { Link } from 'react-router-dom'
import { useMerchant, useCart } from '../../contexts'
import Map from './../../components/GoogleMap'
import Distance from "./../../components/GoogleMap/GetDistance"

const Checkout = ({ location }) => {
  const id = new URLSearchParams(location.search).get('id')
  const { merchants, fetchMerchantById } = useMerchant()


  return (
    <div class="w-full max-w-screen-xl mx-auto px-6">
      Checkout
      <Map></Map>
      <Distance />
    </div>
  )
}

export default Checkout
