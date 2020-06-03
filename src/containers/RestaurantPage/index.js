import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import useSheet from '../../utils/useSheet'
import AboutDropdown from './AboutDropdown'
import MenuList from '../../components/MerchantList/MenuList'
import ShopCover from './ShopCover'
import { useMerchant } from '../../contexts'
import SideBar from '../SideBar'

// import styled from "styled-components"

const IndexPage = ({ location }) => {
  const {
    menus,
    merchants,
    loading,
    error,
    fetchMerchantById,
    fetchMerchantMenuById,
  } = useMerchant()

  const id = new URLSearchParams(location.search).get('id')

  useEffect(() => {
    fetchMerchantById(id)
    fetchMerchantMenuById(id)
  }, [])

  const merchant = merchants[id]
  const menu = menus[id]

  const handleSelect = (menuId) => {
    alert(`${id} ${menuId}`)
  }

  return (
    <div class="w-full max-w-screen-xl mx-auto px-6">
      <div class="lg:flex -mx-6">
        <SideBar />
        <div className="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5">
          {/* <ShopCover res_img={res_img} shop_name={shop_name} /> */}
          <div>{/* tabbar Menu|About|Rate/Comment */}</div>
          {/* <AboutDropdown dataMo={dataMo} /> */}
          <p className="text-2xl font-bold ml-5 md:ml-10 lg:ml-24">
            รายการอาหาร
          </p>
          <MenuList data={menu} handleSelect={handleSelect} />
        </div>
      </div>
    </div>
  )
}

export default IndexPage
