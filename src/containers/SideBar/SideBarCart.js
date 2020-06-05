import React, { useState, useEffect } from 'react'

import { useCart, useMerchant } from '../../contexts'
import styled from 'styled-components'
const CollapseContainer = styled.div``
const SideBarCart = ({ setCollapse, collapse, order, menu }) => {
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    if (!menu || !menu) return
    let total = 0
    Object.keys(order).map((menuId) => {
      const price = menu[menuId].menuPrice * order[menuId]
      console.log(price, menu[menuId])
      total += price
    })
    setTotalPrice(total)
  }, [order, menu])

  return (
    <CollapseContainer
      collapse={collapse}
      className="fixed inset-0 pt-16 h-full bg-white z-90 w-full border-b -mb-16 lg:-mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5 shadow-lg"
    >
      <div class="h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:top-16 bg-white lg:bg-transparent">
        <div class="flex flex-col p-5">
          {order &&
            menu &&
            Object.keys(order).map((menuId) => {
              if (!menu[menuId] && !order[menuId]) return
              const { menuName } = menu[menuId]
              const amount = order[menuId]
              return (
                <div key={menuId}>
                  <p class="text-lg mb-4">{menuName}</p>
                  <div class="flex border-t border-b mb-6 border-gray-300 py-2">
                    <span class="text-gray-500">จำนวน</span>
                    <span class="ml-auto text-gray-900">{amount}</span>
                  </div>
                </div>
              )
            })}
          <span class="title-font font-medium text-2xl text-gray-900">
            {totalPrice}
          </span>
          <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            Button
          </button>
        </div>
      </div>
    </CollapseContainer>
  )
}

export default React.memo(SideBarCart)
