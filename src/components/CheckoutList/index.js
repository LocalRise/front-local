import React, { useEffect, useState, useContext } from 'react'
import { useMerchant, useCart, CartContext } from '../../contexts'
import { useParams } from 'react-router-dom'

const CheckoutList = () => {
  // const { merchant, order } = useCart()
  // const { fetchMerchantList, merchants, error, loading } = useMerchant()
  const { id } = useParams()
  const {
    menus,
    merchants,
    loading,
    error,
    fetchMerchantById,
    fetchMerchantMenuById,
    fetchMerchantList
  } = useMerchant()

  const { addItem, order } = useCart()

  const merchant = merchants[id]
  const menu = menus[id]
  const [totalPrice, setTotalPrice] = useState(0)

  // const {name} = merchants[merchant];
  useEffect(() => {
    fetchMerchantById(id)
    fetchMerchantMenuById(id)
    fetchMerchantList()
    
    if (!menu || !menu) return
    let total = 0
    Object.keys(order).map((menuId) => {
      if (!menu[menuId] || !order[menuId]) return
      const price = menu[menuId].menuPrice * order[menuId]
      console.log(price, menu[menuId])
      total += price
    })
    setTotalPrice(total)

  }, [order,menu])

  return (
    <section class="text-gray-700 body-font overflow-hidden">
      <div class="container px-5 py-20 mx-auto">
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
                {merchant.name}
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
                {order &&
                  menu &&
                  Object.keys(order).map((menuId) => {
                    console.log('----', menu, menuId)
                    if (!menu[menuId] || !order[menuId]) return
                    const { menuName, menuPrice} = menu[menuId]
                    const amount = order[menuId]
                    return (
                      <div key={menuId}>
                        {/* <p class="text-xl mb-4">{menuName}</p> */}
                        <div class="flex border-b border-gray-300 py-2">
                          <span class="text-xl">{menuName} ({menuPrice} บาท)</span>
                          <span class="ml-auto text-gray-900 text-lg">จำนวน {amount} รายการ</span>
                        </div>
                        <div class="flex border-b mb-6 border-gray-300 py-2">
                          <span class="text-gray-500 text-lg">รวม</span>
                          <span class="ml-auto text-gray-900 text-xl">{amount*menuPrice} บาท</span>
                        </div>
                      </div>
                    )
                  })}
              </h2>

            </div>
          </div>
          <div class="py-8 flex border-t-2 border-gray-200 flex-wrap md:flex-no-wrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="tracking-widest font-medium title-font text-gray-900">
                PRICE SUMMARY
              </span>
            </div>
            <div class="md:flex-grow">
              {/* <span class="text-2xl font-medium text-gray-900 title-font mb-2">
                {totalPrice} (บาท)
              </span>
              <span class="text-2xl font-medium text-gray-900 title-font mb-2 ml-auto">
                {totalPrice} (บาท)
              </span> */}
              <div class="flex py-2">
                <span class="text-gray-500 text-2xl">ราคารวมทั้งสิ้น</span>
                <span class="ml-auto text-2xl font-medium text-gray-900 title-font text-xl">{totalPrice} บาท</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CheckoutList
