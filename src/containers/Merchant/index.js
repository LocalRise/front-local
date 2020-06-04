import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import useSheet from '../../utils/useSheet'
import AboutDropdown from './AboutDropdown'
import MenuList from '../../components/MerchantList/MenuList'
import ShopCover from './ShopCover'
import { useMerchant } from '../../contexts'
import SideBar from '../SideBar'
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

  const id = new URLSearchParams(location.search).get('id')

  const [openModal, setOpenModal] = useState(false)
  const [selectedMenu, setSelectedMenu] = useState({})

  useEffect(() => {
    fetchMerchantById(id)
    fetchMerchantMenuById(id)
  }, [])

  const merchant = merchants[id]
  const menu = menus[id]

  const handleSelect = (menuId) => {
    setOpenModal(true)
    setSelectedMenu(getMenuFromId(menuId))
  }

  const getMenuFromId = (id) => {
    return menu.find((item) => item.id === id)
  }
  return (
    <div class="w-full max-w-screen-xl mx-auto px-6">
      <MenuModal
        open={openModal}
        handleClose={setOpenModal}
        data={selectedMenu}
      />
      <div class="lg:flex -mx-6">
        <div className="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5">
          <MenuList data={menu} handleSelect={handleSelect} />
        </div>
        <SideBar />
      </div>
    </div>
  )
}

export default Merchant
