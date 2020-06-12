import React, { useEffect, useState, useContext } from 'react'
import { useMerchant, useCart, CartContext } from '../../contexts'


const CheckoutList = () => {
  const { merchant, order } = useCart()
  const { fetchMerchantList, merchants, error, loading } = useMerchant()
  // const {name} = merchants[merchant];
  useEffect(() => {
    fetchMerchantList()
  }, [])
  const deliveryPrice = 30;

  return (
    <section class="text-gray-700 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <p class="mx-auto leading-relaxed text-xl text-left mb-5 text-center">Billing Information</p>
        <div class="-my-8">
          <div class="py-8 flex flex-wrap md:flex-no-wrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="tracking-widest font-medium title-font text-gray-900">
                MERCHANT
              </span>
              <span class="mt-1 text-gray-500 text-sm">Restaurant</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                {merchants[merchant].name}
                {/* <ul>
                  {order.map(function(item) {
                    return <li key={item}>{item}</li>;
                  })}
                </ul> */}
                {console.log('++',order)}
              </h2>
              <a class="text-indigo-500 inline-flex items-center mt-4">
                Learn More
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="py-8 flex border-t-2 border-gray-200 flex-wrap md:flex-no-wrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="tracking-widest font-medium title-font text-gray-900">
                ORDER LIST
              </span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                {/* {cart.order} */}
                - list 1
              </h2>
              <p class="leading-relaxed">
                Order list show here
              </p>
            </div>
          </div>
          <div class="py-8 flex border-t-2 border-gray-200 flex-wrap md:flex-no-wrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="tracking-widest font-medium title-font text-gray-900">
                PRICE SUMMARY
              </span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                PRICE (THB)
              </h2>
              <p class="leading-relaxed">
                + ค่าส่ง {deliveryPrice} บาท
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CheckoutList
