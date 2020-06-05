import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import AboutDropdown from './AboutDropdown'
import MenuList from '../../components/MerchantList/MenuList'
import ShopCover from './ShopCover'
import { useMerchant, useCart } from '../../contexts'
import { SideBarCart } from '../SideBar'
import { MenuModal } from '../../components/Modal'

const Checkout = ({ location }) => {
  const id = new URLSearchParams(location.search).get('id')
  const { merchants, fetchMerchantById } = useMerchant()

  return <div class="w-full max-w-screen-xl mx-auto px-6">Checkout</div>
}

export default Checkout
