import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useMerchant, useCart, CartContext } from '../../contexts'
import Map from './../../components/GoogleMap'
import CheckoutList from './../../components/CheckoutList'

const Checkout = ({ location }) => {
  const id = new URLSearchParams(location.search).get('id')

  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto px-6">
        <section className="text-gray-700 body-font text-center bg-gray-800">
          <div className="container px-5 py-10 mx-auto">
            <h1 className="sm:text-3xl text-4xl font-bold title-font text-white">
              Checkout
            </h1>
          </div>
        </section>
        <p className="mx-auto leading-relaxed text-2xl text-left mb-5 text-center mt-20">Mark your destination</p>
        <Map></Map>
        <section className="text-gray-700 body-font">
          <div className="container px-5 py-10 mx-auto">
            <CheckoutList location={location}></CheckoutList>
            {console.log('---',location)}
          </div>
        </section>
        
      </div>
      
      {/* <Distance /> */}
    </>
  );
}

export default Checkout
