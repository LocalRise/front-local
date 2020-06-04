import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import AboutDropdown from './AboutDropdown'
import MenuList from '../../components/MerchantList/MenuList'
import ShopCover from './ShopCover'
import { useMerchant, useCart } from '../../contexts'
import { SideBarCart } from '../SideBar'
import { MenuModal } from '../../components/Modal'

const Merchant = ({ location }) => {
  const {
    menus,
    merchants,
    loading,
    error,
    fetchMerchantById,
    fetchMerchantMenuById,
  } = useMerchant()

  const { addItem, order } = useCart()

  const id = new URLSearchParams(location.search).get('id')

  const [openModal, setOpenModal] = useState(false)
  const [selectedMenu, setSelectedMenu] = useState()

  useEffect(() => {
    fetchMerchantById(id)
    fetchMerchantMenuById(id)
  }, [])

  const merchant = merchants[id]
  const menu = menus[id]

  const handleSelect = (menuId) => {
    setOpenModal(true)
    setSelectedMenu(menuId)
  }

  const handleAddItem = (itemId, amount) => {
    setOpenModal(false)
    addItem(id, itemId, parseInt(amount))
  }

  const handleClose = () => {
    setOpenModal(false)
  }

  const getMenuFromId = (id) => {
    if (menu && id) return menu[id]
  }
  return (
    <div class="w-full max-w-screen-xl mx-auto px-6">
      <MenuModal
        open={openModal}
        handleClose={handleClose}
        data={getMenuFromId(selectedMenu)}
        handleAddItem={handleAddItem}
      />
      <div class="lg:flex -mx-6">
        <div className="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5">
          <MenuList data={menu} handleSelect={handleSelect} />
        </div>
        <SideBarCart order={order} menu={menu} />
      </div>
    </div>
  )
}

export default Merchant
