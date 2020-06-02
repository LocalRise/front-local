import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import useSheet from '../../utils/useSheet'
import AboutDropdown from './AboutDropdown'
import MenuList from '../../components/MerchantList/MenuList'
import ShopCover from './ShopCover'
import { useMerchant } from '../../contexts'

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
  console.log(merchants, menus)

  return (
    <>
      {/* <ShopCover res_img={res_img} shop_name={shop_name} /> */}
      <div>{/* tabbar Menu|About|Rate/Comment */}</div>
      {/* <AboutDropdown dataMo={dataMo} /> */}
      <p className="text-2xl font-bold ml-5 md:ml-10 lg:ml-24">รายการอาหาร</p>
      <MenuList data={menu} />
    </>
  )
}

export default IndexPage
