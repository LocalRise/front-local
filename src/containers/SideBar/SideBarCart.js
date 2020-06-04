import React, { useState, useEffect } from 'react'

import { useCart, useMerchant } from '../../contexts'
import styled from 'styled-components'
const CollapseContainer = styled.div``
const SideBarCart = ({ setCollapse, collapse, order, menu }) => {
  console.log(order)
  return (
    <CollapseContainer
      collapse={collapse}
      className="fixed inset-0 pt-16 h-full bg-white z-90 w-full border-b -mb-16 lg:-mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5 shadow-lg"
    >
      <div class="h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:top-16 bg-white lg:bg-transparent">
        {order && menu &&
          Object.keys(order).map((menuId) => {
            const { menuName } = menu[menuId]
            return (
              <div key={menuId}>
                {menuName} - {order[menuId]}
              </div>
            )
          })}
      </div>
    </CollapseContainer>
  )
}

export default React.memo(SideBarCart)
