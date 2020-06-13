import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useMerchant, useCart, CartContext } from '../../contexts'
import Map from './../../components/GoogleMap'
import CheckoutList from './../../components/CheckoutList'

const Checkout = ({ location }) => {
  const id = new URLSearchParams(location.search).get('id')
  const [customerLocation, setCustomerLocation] = useState({ lat: 0, lng: 0 })
  console.log(customerLocation)

  return (
    <>
      <div className="w-screen mx-auto px-6">
        <section className="text-gray-700 body-font text-center bg-teal-600">
          <div className="container px-1 mx-auto">
            <h1 className="sm:text-3xl text-4xl font-bold title-font text-white">
              Checkout
            </h1>
          </div>
        </section>
        <p className="mx-auto leading-relaxed text-2xl text-left mb-10 text-center mt-10">เลือกสถานที่ส่ง</p>
        <Map setCustomerLocation={setCustomerLocation}></Map>
        <section className="text-gray-700 body-font">
          <div className="container px-5 py-10 mx-auto">
            <CheckoutList location={location} customerLocation={customerLocation}></CheckoutList>
          </div>
        </section>

      </div>
    </>
  );
}

export default Checkout
