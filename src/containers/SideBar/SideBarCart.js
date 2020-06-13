import React, { useState, useEffect } from 'react'

import styled from 'styled-components'
import Loader from '../../components/Loader'
import { Link } from 'react-router-dom'
import { MdClose } from 'react-icons/md'
import { useCart } from './../../contexts'

const Container = ({ children, openCart }) => {
  return (
    <div className={`${openCart ? "" : "hidden"} z-30 fixed inset-0 pt-16 h-full bg-white z-90 w-full border-b -mb-16 lg:-mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5 shadow-lg`}>
      <div class="h-full scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:top-16 bg-white lg:bg-transparent">
        {children}
      </div>
    </div>
  )
}

const SideBarCart = ({ merchantId, loading, order, handleRemoveItem, menu, openCart }) => {
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    if (!menu || !menu) return
    let total = 0
    Object.keys(order).map((menuId) => {
      if (!menu[menuId] || !order[menuId]) return
      const price = menu[menuId].menuPrice * order[menuId]
      console.log(price, menu[menuId])
      total += price
    })
    setTotalPrice(total)
  }, [order, menu])

  if (loading)
    return (
      <Container openCart={openCart}>
        <div className="flex h-screen items-center">
          <Loader />
        </div>
      </Container>
    )

  return (
    <Container openCart={openCart}>
      <div class="flex flex-col p-5">
        <p class="mb-2 font-bold">รายการสั่งซื้อ</p>
        {order &&
          menu &&
          Object.keys(order).map((menuId) => {
            // console.log('----', menu, menuId)
            if (!menu[menuId] || !order[menuId]) return
            const { menuName } = menu[menuId]
            const amount = order[menuId]
            return (
              <div key={menuId}>
                <div class="flex ">
                  <span class="text-lg mb-4">{menuName}</span>
                  <MdClose className="ml-auto pt-1 text-2xl text-orange-500"
                    onClick={() => {
                      handleRemoveItem(menuId, -1 * amount)
                      // console.log(menuId, amount-1)
                    }} />
                </div>
                <div class="flex border-t border-b mb-6 border-gray-300 py-2">
                  <span class="text-gray-500">จำนวน</span>
                  <span class="ml-auto text-gray-900">{amount}</span>
                </div>
              </div>
            )
          })}
        <span class="title-font font-medium text-2xl text-gray-900 text-center">
          รวม {totalPrice && totalPrice} บาท
        </span>
        <Link to={totalPrice && totalPrice > 0 ? `/checkout/${merchantId}/` :  `/merchant/${merchantId}/`}>
          <button class="flex ml-auto mr-auto mt-3 text-white font-bold bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded">
            ชำระเงิน
          </button>
        </Link>

      </div>
    </Container>
  )
}

export default React.memo(SideBarCart)
