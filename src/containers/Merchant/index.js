import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import About from './About'
import MenuList from '../../components/MerchantList/MenuList'
import Cover from './Cover'
import { useMerchant, useCart } from '../../contexts'
import { SideBarCart } from '../SideBar'
import { MenuModal } from '../../components/Modal'
import { AiFillDingtalkCircle } from 'react-icons/ai'

const Merchant = ({ openCart }) => {

  const { id } = useParams()
  const {
    menus,
    merchants,
    loading,
    error,
    fetchMerchantById,
    fetchMerchantMenuById,
  } = useMerchant()

  const { addItem, order, removeItem } = useCart()

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

  const handleRemoveItem = (itemId, amount) => {
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
      {merchant &&
        <div className="">
          <Cover merchant={merchant} />
          <About merchant={merchant} />
        </div>
      }
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
        <SideBarCart
          merchantId={id}
          loading={loading}
          order={order}
          menu={menu}
          openCart={openCart}
          handleRemoveItem={handleRemoveItem}
        />
      </div>
    </div>
  )
}

export default Merchant
